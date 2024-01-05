import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { selectcontact,deletedata } from '../contactSlicer'
import { toast } from 'react-toastify';

function Manage_contact() {
    const redirect=useNavigate();
    const dispatch=useDispatch();
    useEffect(() => {
        fetch();
    }, []);
    const fetch=()=>{
        dispatch(selectcontact(`http://localhost:3000/contact`));
    }
    useEffect(()=>{
        dispatch(selectcontact('http://localhost:3000/contact'));
    },[]);

    const deletecontact=(id)=>{
        dispatch(deletedata(`http://localhost:3000/contact/${id}`));
        toast.success('Delete user sucees');
        fetch();
    }
    const {allcontact}=useSelector((state)=>state.contact);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2 className='text-center'>Manage Contact</h2>
                        <Link to="/Add_contact" className='btn btn-primary float-end mb-5'> 
                            Add Contact
                        </Link>

                        <table className="table table-bordered mt-5">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Mobile</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {allcontact.map((value)=>{
                                    return(
                                        <tr>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.msg}</td>
                                        <td>{value.mobile}</td>

                                        <td className='text-center'>
                                                    <button className='btn btn-danger me-2' onClick={()=>deletecontact(value.id)}>Delete</button>
                                                    <button className='btn btn-info' onClick={()=>{ redirect('/edit_contact/'+value.id)}}>Edit</button>
                                                </td>
                                    </tr>   
                                    )
                                })}
                              
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Manage_contact