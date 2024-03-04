import ExpenceTable from "./ExpenceTable";
import Nav from "./Nav";
import Operation from "./Operation";

const tableHead = [
  "ItemId",
  "ItemName",
  "Amount",
  "ExpenseDate",
  "Catagory",
  "Action Item",
];

function App() {
  return (
    <div className="app">
      <Nav />
      <Operation />
      <ExpenceTable tHead={tableHead} />
    </div>
  );
}

export default App;
