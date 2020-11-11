import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import EmptyTrashPNG from '../../Components/Assets/icons/empty_trash.png';


const TrashList = () => {
    const [isEmpty,setEmpty] = useState(false);
    
    return (
        <div>
            <Layout pageName="Trash">
               {
                   !isEmpty ? (
                    <>
                    <section className="page-section">
                        <div className="row">
                            <div className="col-md-8">
                                <h5 className="bold-550">Items here will be deleted automatically after 14 days</h5>
                            </div>
                            <div className="col-md-4">
                                <Link to="#" className="btn btn-danger pull-right" onClick={(event)=>{
                                    event.preventDefault();
                                    setEmpty(true);
                                }}>Empty</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="input-group mt-20">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text fa fa-search search-icon" ></span>
                                    </div>
                                    <input type="text" className="search-engine form-control" placeholder="Search Item"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-section">
                                <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
                                    <thead className="mb-20">
                                        <tr>
                                        <th className="th-sm text-muted">MERCHANT
                                        </th>
                                        <th className="th-sm text-muted">TYPE
                                        </th>
                                        <th className="th-sm text-muted">CATEGORY
                                        </th>
                                        <th className="th-sm  text-muted">
                                            OFFER
                                        </th>
                                        <th className="th-sm text-muted">
                                            DELETE DATE
                                        </th>
                                        <th className="th-sm text-center">
                                        </th>
                                        <th className="th-sm text-center">
                                        </th>
                                        </tr>
                                    </thead>
                                <tbody>
                    {
                        [...'123456'].map(()=>(
                            <tr>
                                <td>
                                    Jumia
                                </td>
                                <td>
                                    Cashback
                                </td>
                                <td>
                                    Makeup & Skincare
                                </td>
                                <td>
                                    30%
                                </td>
                                <td>
                                    10/20/2020
                                </td>
                                <td className="text-center">
                                    <button className="restore-action-button">Restore</button>
                                </td>
                                <td className="text-center">
                                    <button className="delete-action-button">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </section>
                </>
                   ) : (
                    <section className="page-section">
                        <h4 className="bold-550 text-center mb-4">Your Trash is empty</h4>
                        <div class="big-illustration-container">
                            <img src={EmptyTrashPNG}/>
                        </div>
                    </section>
                   )
               }

           
        </Layout>
    </div>
    )
}
export default TrashList;


