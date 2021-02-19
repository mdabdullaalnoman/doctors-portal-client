import React, { useState } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import './AddDoctor.css';
import { BsCloudUpload } from "@react-icons/all-files/bs/BsCloudUpload";

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    console.log(info, file);
    const handleBlur = (event) => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    };

    const handleFileUpload = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        console.log(formData);
        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert('from submited');
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-10 add-doctor">
                    <h3 className="text-left my-3 text-secondary">AddDoctor</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-div">
                            <p>Email Address</p>
                            <input onBlur={handleBlur} type="email" className="email" name="email" placeholder="Enter email" />
                        </div>
                        <div className="input-div">
                            <p>Your Name</p>
                            <input onBlur={handleBlur} type="text" className="name" name="name" placeholder="name" />
                        </div>
                        <div className="input-div">
                            <p>Upload Image</p>
                            <div class="upload-btn-wrapper">
                                <button class="btns"><span class="mr-2"><BsCloudUpload/></span>Upload a file</button>
                                <input onChange={handleFileUpload} type="file" name="myfile" />
                            </div>
                        </div>
                        <button type="submit" className="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;