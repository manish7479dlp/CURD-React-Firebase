import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";
import {db} from "../firebase"
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  const { name, email, contact } = state;

  useEffect(() => {
    db.child("Contacts").on("value", (snapshort) => {
      if (snapshort.val() !== null) {
        setData({ ...snapshort.val() });
      } else {
        setData({});
      }
    });

    // it is a clean up function..
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() =>{
    if(id) {
      setState({...data[id]})
    } else {
      setState({...initialState})
    }

    return () => {
      setState({...initialState})
    }
  },[id,data])

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!name || !email || !contact) {
      toast.error("Please provide value in each input field");
    } else {

       if(!id) {
        db.child("Contacts").push(state , (err) =>{
          if(err) {
            toast.error(err);
          } else {
            toast.success("Contacts Added Successfully")
          }
        });
       } else {
        db.child(`Contacts/${id}`).set(state , (err) =>{
          if(err) {
            toast.error(err);
          } else {
            toast.success("Contacts Updated Successfully")
          }
          
       });
       
      }
      setTimeout(() => navigate("/") , 500);
    }
  };
  
  const handleInputChange = (event) =>{
      const {name ,value} = event.target;
      setState({...state , [name] : value})
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "150x",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name.."
          value={name || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email.."
          value={email || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No.."
          value={contact || ""}
          onChange={handleInputChange}
        />
      <input type="submit" value={id ? "Update" : "Save"}/>
      </form>

    </div>
  );
};

export default AddEdit;
