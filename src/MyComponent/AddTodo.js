import React, { useState } from "react";
import { toast } from 'react-toastify';

export const AddTodo = (props) => {
  
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // const submit = (e) => {
    //      e.preventDefault();
    //      if(!title || !desc){
    //         // alert("Title or Description is not Blank")
    //         toast.error('Title or Description is not Blank');
    //      }
    //      else(title && desc){
    //       toast.success("Todo is Added");
    //      }
    //      props.addTodo(title, desc)
    // }

    const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      toast.error('Title or Description is not Blank');
    } else {
      toast.success("Todo is Added");
      props.addTodo(title, desc);
      setTitle(""); // clear input
      setDesc("");
    }
  }
    
    return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="title"
            placeholder="ENTER TODO HERE"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
