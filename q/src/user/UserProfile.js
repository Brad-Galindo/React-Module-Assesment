import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const UserProfile = () => { 
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    getUser();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div
      className="tab-pane active pt-2"
      role="tabpanel"
      aria-labelledby="profle-tab"
    >
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>User Name</label>
        </div>
        <div className="col-md-8 col-6">{user.username}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>EMail</label>
        </div>
        <div className="col-md-8 col-6">{user.email}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>Phone</label>
        </div>
        <div className="col-md-8 col-6">{user.phone}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>Company</label>
        </div>
        <div className="col-md-8 col-6">{(user.company || {}).name}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>Website</label>
        </div>
        <div className="col-md-8 col-6">{user.website}</div>
      </div>
      <hr />
    </div>
  );
};

export default UserProfile;
