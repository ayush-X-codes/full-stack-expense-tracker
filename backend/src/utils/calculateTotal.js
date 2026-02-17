function calculateTotals(transactions) {
  const incomeTransactions = transactions.filter((t) => t.type === "income");

  const expenseTransactions = transactions.filter((t) => t.type === "expense");

  const totalIncome = incomeTransactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0,
  );

  const totalExpense = expenseTransactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0,
  );

  const balance = totalIncome - totalExpense;

  return {
    totalIncome,
    totalExpense,
    balance,
  };
}

export { calculateTotals };
