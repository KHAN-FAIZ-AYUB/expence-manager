const ExpenceTable = ({ tHead }) => {
  //   console.log(tHead);
  return (
    <table className="table">
      {tHead.map((element) => (
        <th>{element}</th>
      ))}
    </table>
  );
};

export default ExpenceTable;
