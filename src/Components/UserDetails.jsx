import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUserDetails(); //This method will fetch the data automatically when the page intial renders
  }, []);

  const getUserDetails = () => {
    //API CALL TO FETCH THE USER DETAILS DATA
    const data = [];
    setTableData(data);
  };
  return (
    <div className="user-details">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {tableData &&
          tableData.length &&
          tableData.map((tData, index) => {
            return (
              <tr key={index}>
                {/* Here map according with the name or key like tData.name */}
                <td>{tData}</td>
                <td>{tData}</td>
                <td>{tData}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default UserDetails;
