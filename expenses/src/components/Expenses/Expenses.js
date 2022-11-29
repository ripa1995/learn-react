import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />;
      })}
    </Card>
  );
}

export default Expenses;
