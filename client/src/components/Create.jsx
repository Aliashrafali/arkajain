import React, { useState } from "react";
import Menu from "./Menu";
import { addUser } from "../service/api.js";

const Create = () => {

    const [user, setUser] = useState({
        name: '',
        mobile: '',
        email: '',
        image: ''
    });

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const fileData = (e) => {
        setUser({ ...user, image: e.target.files[0] });
    }

    const submitData = async (e) => {
        e.preventDefault(); // stop refresh
        // validation 
        if (!user.name) {
            alert("Enter Your Name");
            return;
        }
        if (!user.mobile) {
            alert("Enter Your Mobile");
            return;
        }
        if (user.mobile.length !== 10) {
            alert("Enter 10 Digit Mobile No");
            return;
        }
        if (!user.image) {
            alert("Upload Image");
            return;
        }

        const formData = new FormData();    // file handling 
        formData.append('image', user.image, user.image.name);
        formData.append('name', user.name);
        formData.append('mobile', user.mobile);
        formData.append('email', user.email);
        try {
            const res = await addUser(formData); // addUser is a api name 
            if(res.status === 201){
                alert(res.data);
            }else{
                alert("Something went wrong try after sometime");
            }
        } catch (error) {
            console.log("Error while insert data", error);
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
                                            <label for="name" class="form-label">Name <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="text" name="name" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="mobile" class="form-label">Mobile No <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="text" name="mobile" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mobile" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="email" name="email" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email Id" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="image" class="form-label">Image <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="file" name="image" onChange={fileData} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>

                                        <div style={{ display: 'block', float: 'right' }}>
                                            <button className="btn btn-primary" onClick={submitData}>Submit</button>
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

export default Create;