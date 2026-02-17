import { getMonthlyTransactions } from "../model/dashboardModel.js";
import { calculateTotals } from "../utils/calculateTotal.js";

async function getDashboardOverview(req, res) {
  try {
    const userId = req.user.userId;
    const { month, year } = req.query;
    console.log("month and year: ", month, year)
    const transactions = await getMonthlyTransactions(userId, month, year);
    console.log("transactions are: ", transactions)
    const total = calculateTotals(transactions);

    res.status(200).json({
      success: true,
      data: {
        totalIncome: total.totalIncome,
        totalExpenses: total.totalExpense,
        balance: total.balance,
        month: month,
        year: year,
      },
    });
  } catch (error) {
    console.error("Monhty transaction error: ", error);
    res.status(500).json({success: false, error: "Failed to load monthly transactions"})
  }
}

export { getDashboardOverview };
