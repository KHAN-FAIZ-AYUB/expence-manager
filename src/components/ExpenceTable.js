const ExpenceTable = ({ tHead }) => {
  //   console.log(tHead);
  return (
    <table className="table">
      {tHead.map((element) => (
        <th>{element}</th>
      ))}
      <tr>
        <td></td>
      </tr>
    </table>
  );
};

export default ExpenceTable;
