import {
  addTransactionToDB,
  findTransactionById,
  getUserTransactions,
  removeUserTransactions,
} from "../model/transactionModel.js";

async function addTransaction(req, res) {
  const userId = req.user.userId;

  const { amount, description, date, type, categoryId } = req.body;

  try {
    const transactions = await addTransactionToDB(
      userId,
      amount,
      description,
      date,
      type,
      categoryId,
    );
    res
      .status(201)
      .json({ success: true, message: "transaction added successfully" });
  } catch (error) {
    console.error("transaction error: ", error);
    res
      .status(500)
      .json({ success: false, error: "transaction error. Please try again" });
  }
}

async function getAllTransactions(req, res) {
  try {
    const userId = req.user.userId;

    const userTransactions = await getUserTransactions(userId);

    if (!userTransactions || userTransactions.length === 0) {
      return res.status(404).json({ error: "No transactions found." });
    }

    res.status(200).json({
      success: true,
      total: userTransactions.length,
      transactions: userTransactions,
    });
  } catch (error) {
    console.error("Transaction error", error);
    res.status(500).json({
      success: false,
      error: "Failed to find transactions. Please try again.",
    });
  }
}

async function removeTransaction(req, res) {
  try {
    const userId = req.user.userId;

    const { id } = req.params;

    const transaction = await findTransactionById(id, userId);

    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "No transaction found" });
    }

    await removeUserTransactions(id, userId);
    res
      .status(200)
      .json({ success: true, message: "transaction deleted successfully." });
  } catch (error) {
    console.error("Transaction error: ", error);
    res
      .status(500)
      .json({ error: "Failed to delete transactions. Please try again." });
  }
}

export { addTransaction, getAllTransactions, removeTransaction };
