import React, { useState } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';

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
                <div className="col-12 col-md-10">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">upload image</label>
                            <input onChange={handleFileUpload} type="file" className="form-control w-25" placeholder="file upload" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;