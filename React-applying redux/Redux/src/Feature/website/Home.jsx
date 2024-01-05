import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteData, selectuser } from '../userSlicer'
import { toast } from 'react-toastify';

function Home() {

    const redirect=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(selectuser(`http://localhost:3000/user`));
    },[]);

   const fetch=()=>{
    dispatch(selectuser(`http://localhost:3000/user`))
   }
   const deleteuser=(id)=>{
    dispatch(deleteData(`http://localhost:3000/user/${id}`));
    toast.success('DELETE')
    fetch();
   }

    const {alluser} = useSelector ((state)=> state.user);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2 className='text-center'>Manage Data</h2>
                        <Link to="/add_data" className='btn btn-primary float-end mb-5'> 
                            Add Data
                        </Link>

                        <table className="table table-bordered mt-5">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* {
                                
                                alluser.map((value)=>{
                                    return(
                                        <tr>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-danger me-2' onClick={()=>deleteuser(value.id)}>Delete</button>
                                            <button className='btn btn-info' onClick={()=>{ redirect('/edit_data/'+value.id)}}>Edit</button>
                                        </td>
                                    </tr>   
                                    )
                                })}
                                 */}


                                {          
                                    alluser.map((value) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.mobile}</td>
                                                <td className='text-center'>
                                                    <button className='btn btn-danger me-2' onClick={()=>deleteuser(value.id)}>Delete</button>
                                                    <button className='btn btn-info' onClick={()=>{ redirect('/edit_data/'+value.id)}}>Edit</button>
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

    )
}

export default Home