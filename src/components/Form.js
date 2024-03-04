const Form = () => {
  return (
    <div className="form">
      <h1 style={{ color: "grey", padding: "10px 0px 10px 10px" }}>
        Add Expence
      </h1>
      <div style={{ padding: "10px 0px 10px 10px" }}>
        <item>
          <span>ItemName</span>
          <p>
            <input type="text"></input>
          </p>
        </item>
        <category>
          <span>Catagory</span>
          <p>
            <select>
              <option></option>
            </select>
          </p>
        </category>
        <amount>
          <span>Amount</span>
          <p>
            <input type="text"></input>
          </p>
        </amount>
        <date>
          <span>Expence Date</span>
          <p>
            <input type="date"></input>
          </p>
        </date>
      </div>
    </div>
  );
};
export default Form;
