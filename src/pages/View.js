import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useHistory, useParams, Link } from "react-router-dom";
import "./View.css";

const View = () => {
  const [user , setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    db.child(`Contacts/${id}`)
    .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });

      // singleData();
      
  }, [id])

    const tData = {name : "",
  email : "",
contact : ""}

  const singleData = async ()  =>{
    let response = await db.child(`Contacts/${id}`)
      .get()
      // response = await response.json();
      console.log(response.val());
      setUser({...response.val()})
  }



  // console.log(user);
  return (
    <>

    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Contact:</strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
    </>
    
  )
};

export default View;
