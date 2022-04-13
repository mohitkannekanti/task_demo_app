import React from "react";

const Profile = (props) => {
  console.log("Profile Props", props);

  //Bind the data according with the props
  //Destructure the object and pass the key name
  //const {name, email, password} = props
  //
  return (
    <div className="profile">
      <tr>
        <th>Name</th>
        <td>Name</td>
        {/* {name} like this */}
      </tr>
      <tr>
        <th>Email</th>
        <td>Email</td>
      </tr>
      <tr>
        <th>Role</th>
        <td>Role</td>
      </tr>
    </div>
  );
};

export default Profile;
