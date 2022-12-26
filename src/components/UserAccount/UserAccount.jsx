import React from 'react'
import "./UserAccount.css";
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
const UserAccount = () => {
    const navigate = useNavigate()
    const [model, setModel] = useState(false)
    const handleClickOpen=()=>{
        setModel(!model)
    }

    const closeHandler=()=>{
        setModel(false)
    }
    return (
        <div className="model">
            <button className='sidebarListItem model' onClick={handleClickOpen}>+ New Account</button>
            <div>
                {model?
                <div className='main'>
                    <div className='loginPopup'>
                        <div className='modelHeader'>
                            <h1>Create Account</h1>
                            
                        </div>
                        <div>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            placeholder="Roy_1121"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Roy Becker"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder="Roy@gmail.com"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            placeholder="+91 123 456 67"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            placeholder="New York | USA"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <button className='buttonForm' onClick={()=> navigate("/")}>Submit</button>
                                    <button className='buttonForm' onClick={closeHandler}>close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>:""}
            </div>
        </div>
    )
}

export default UserAccount