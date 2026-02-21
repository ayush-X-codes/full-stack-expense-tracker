import {
  getFilteredTransaction,
  getMonthlyTransactions,
} from "../model/dashboardModel.js";
import { calculateTotals } from "../utils/calculateTotal.js";

async function getDashboardOverview(req, res) {
  try {
    const userId = req.user.userId;
    const { month, year } = req.query;

    const transactions = await getMonthlyTransactions(userId, month, year);

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
    res
      .status(500)
      .json({ success: false, error: "Failed to load monthly transactions" });
  }
}

async function getFilteredTransactionByDate(req, res) {
  try {
    const userId = req.user.userId;

    const { range, startDate, endDate, categoryId, type } = req.query;

    let calculateStartDate;
    let calculateEndDate;

    if (range === "this_month") {
      const date = new Date();

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = "01"
      calculateStartDate = `${year}-${month}-${day}`

      const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
      const lastDay = String(lastDayDate.getDate()).padStart(2, '0')
      calculateEndDate = `${year}-${month}-${lastDay}`


    } else if (range === "last_month") {
      const date = new Date();

      const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      const year = lastMonthDate.getFullYear();
      const month = String(lastMonthDate.getMonth() + 1).padStart(2, '0')
      const day = "01"
      calculateStartDate = `${year}-${month}-${day}`

      const lastDayDate = new Date(date.getFullYear(), date.getMonth(), 0)
      const lastDay = String(lastDayDate.getDate()).padStart(2, '0')
      calculateEndDate = `${year}-${month}-${lastDay}` 
    } else {
      calculateStartDate = startDate;
      calculateEndDate = endDate;
    }

    const filters = {
      firstDate: calculateStartDate,
      lastDate: calculateEndDate,
      categoryId: categoryId,
      type: type,
    };

    const transactionByDateRange = await getFilteredTransaction(
      userId,
      filters,
    );

    console.log(transactionByDateRange)

    res
      .status(200)
      .json({ success: true, transactions: transactionByDateRange });
  } catch (error) {
    console.error("transaction filter error", error);
    res.status(500).json({ error: "Failed to filter transactions" });
  }
}

export { getDashboardOverview, getFilteredTransactionByDate };
