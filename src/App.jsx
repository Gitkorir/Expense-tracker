// src/App.jsx
import { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Groceries",
      amount: 50,
      date: "2025-04-15",
      description: "Weekly grocery shopping",
    },
    {
      id: 2,
      name: "Gas",
      amount: 40,
      date: "2025-04-10",
      description: "Car fuel",
    },
    {
      id: 3,
      name: "Dinner",
      amount: 75,
      date: "2025-04-05",
      description: "Date night",
    },
  ]);

  const [filterTerm, setFilterTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: expenses.length + 1,
      },
    ]);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const searchTerm = filterTerm.toLowerCase();
    return (
      expense.name.toLowerCase().includes(searchTerm) ||
      expense.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p>Check out last months Expenses</p>
      <ExpenseFilter onFilterChange={setFilterTerm} />
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
