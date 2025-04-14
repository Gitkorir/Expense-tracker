// src/components/ExpenseFilter.jsx
function ExpenseFilter({ onFilterChange }) {
  return (
    <div className="expense-filter">
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}

export default ExpenseFilter;
