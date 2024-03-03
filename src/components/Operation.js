const Operation = () => {
  return (
    <div>
      <h1 className="h1">Personal Expense Manager</h1>
      <operation className="operation">
        <button className="add-btn">Add Expence</button>
        <span className="filter">
          <input className="search" type="text" placeholder="Search"></input>
          <button className="filter-btn">Filter</button>
        </span>
      </operation>
    </div>
  );
};

export default Operation;
