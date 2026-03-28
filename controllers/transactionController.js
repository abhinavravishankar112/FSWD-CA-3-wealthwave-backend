const Transaction = require('../models/Transaction');

// 1. LOG NEW TRANSACTION 
exports.logTransaction = async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    // TODO: Create a new Transaction instance
    const transaction = new transaction({
        description, amount, category, owner: req.user._id
    })
    // SECURITY: Ensure the 'owner' field is set to 'req.user._id'
    const saveTransation = await transaction.save();
    // TODO: Save to database and return status 201 with the transaction object
    return res.status(201).json({saveTransation})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2. FETCH TRANSACTION HISTORY WITH PAGINATION
exports.getHistory = async (req, res) => {
  try {
    // TODO: Extract 'page' and 'limit' from req.query (Defaults: page=1, limit=5)
    let {page = 1, limit = 5} = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    // TODO: Calculate 'skip' value
    const skip = page -1;
    // TODO: Query Database: Filter by owner (req.user._id), apply limit and skip
    const transaction = await transaction.find({owner: req.user._id}).skip(skip).limit(limit)
    // TODO: Return status 200 with the data
    return res.status(200).json({transaction})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};