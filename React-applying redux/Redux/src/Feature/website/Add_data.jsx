import React,{useState} from 'react'  
import {  Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

import {insert}  from '../userSlicer';

function Add_data() {
    const {name}=useSelector((state)=>state.user);
    const {age}=useSelector((state)=>state.contact);
    const dispatch=useDispatch();

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
    });
    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(),[e.target.name]: e.target.value });
        console.log(formvalue);
    }
    const validation = () => {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
            toast.error('Name Field is required !');
            return result = false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            toast.error('Email Field is required !');
            return result = false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            toast.error('Password Field is required !');
            return result = false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            toast.error('Mobile Field is required !');
            return result = false;
        }
       
        return result;
    }
    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
             dispatch(insert(`http://localhost:3000/user`,formvalue));
            setFormvalue({ ...formvalue, name: "", email: "", mobile: "", password: ""});
            toast.success('Signup sucees');
            return false;
        }
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                <h1>{name} {age}</h1>
                    <div className="col-sm-12">
                        <h2 className='text-center'>Add Data</h2>
                        <Link to="/Home" className='btn btn-primary float-end mb-5'>
                            Back Home
                        </Link>
                        <br /><br />
                        <form method="post">
                            <div className="mb-3 mt-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" value={formvalue.name} onChange={changehandel} id="email" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" value={formvalue.email} onChange={changehandel} id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" value={formvalue.password} onChange={changehandel} id="pwd" placeholder="Enter password" name="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Mobile:</label>
                                <input type="number" className="form-control" value={formvalue.mobile} onChange={changehandel} id="pwd" placeholder="Enter Mobile" name="mobile" />
                            </div>
                            
                            <button type="submit" onClick={submithandel}  className="btn btn-primary">Submit</button>  
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Add_data