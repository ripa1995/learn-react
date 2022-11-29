import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterByYear, setFilterByYear] = useState("2020");

  const onFilterByYearSelectedHandler = (yearSelected) => {
    setFilterByYear(yearSelected);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterByYear}
        onFilterByYearSelected={onFilterByYearSelectedHandler}
      />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
