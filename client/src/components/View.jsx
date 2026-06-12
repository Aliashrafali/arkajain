import React from "react";
import Menu from "./Menu";
import { getUser, deleteData } from "../service/api.js";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const View = () =>{

    const [users, setUsers] = useState([]); // bulk 

    useEffect(() =>{  // add side effects when you will get data from database, or call api
        getUsersData(); // it is function
    });

    const getUsersData = async () =>{
        const res = await getUser(); // API 
        setUsers(res.data);  // set res data in users variable 
    }

    const deleteUser = async (e) =>{
        try {
            const res = await deleteData({id:e});
            if(res.status === 201){
                alert("Deleted");
            }else{
                alert("SOmething Went wrong");
            }
        } catch (error) {
            console.log("Error while delete data", error);
        }
    }

    return(
        <>
            <Menu />
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <span><b>All Users Records</b></span>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered w-100">
                                        <thead>
                                            <tr>
                                                <th>Sno</th>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Email</th>
                                                <th>Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((item,key) =>{
                                                    return(
                                                        <tr>
                                                            <td>{key+=1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.mobile}</td>
                                                            <td>{item.email}</td>
                                                            <td>
                                                                <img src={`http://localhost:8000/uploads/${item.image}`} alt={item.image} height={'40px'} width={'40px'} className="img-thumbnail"></img>
                                                            </td>
                                                            <td>
                                                                <span className="badge rounded-pill text-bg-primary">Edit</span>
                                                                <NavLink
                                                                    onClick={() =>{
                                                                        if(window.confirm("Are you sure want to delete this item")){
                                                                            deleteUser(`${item._id}`);
                                                                        }
                                                                    }}
                                                                >
                                                                    <span className="badge rounded-pill text-bg-danger" style={{marginLeft:'5px'}}>Delete</span>
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default View;