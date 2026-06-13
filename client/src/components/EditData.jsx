import React from "react";
import { getEditData, updateApi } from "../service/api.js";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Menu from "./Menu.jsx";

const EditData = () => {
    const navigate = useNavigate(); // programtic router 
    const id = useParams(); // handle dynamic router 

    const getData = async () => {
        const res = await getEditData(id);
        setUsers(res.data);
    }

    useEffect(() => { // when you will get data from database, call any third party api
        getData(); // it is a function
    }, []);
    const [users, setUsers] = useState({
        _id: "",
        name: "",
        mobile: "",
        email: ""
    });

    const onValueChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
        console.log(users);
    }

    const updateData = async (e) =>{
        e.preventDefault();
        try {
            const response = await updateApi(users);
            if(response.status === 201){
                alert(response.data);
                navigate('/View');
            }else{
                alert("Something Went Wrong");
            }
        } catch (error) {
            console.log("Error While edit data", error);
        }
    }

    return (
        <>
            <Menu />
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <span><b>User Registration Form</b></span>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" name="name" value={users.name} onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="mobile" class="form-label">Mobile No</label>
                                            <input type="text" name="mobile" value={users.mobile} onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mobile" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" name="email" value={users.email} onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email Id" />
                                        </div>

                                        <div style={{ display: 'block', float: 'right' }}>
                                            <button className="btn btn-primary" onClick={updateData}>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditData;