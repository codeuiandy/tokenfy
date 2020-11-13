import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import User from '../Assets/user.png'
import EditPNG from '../Assets/icons/white_edit.png';

export default function UserDetails(props) {
    return (
        <div>
            <Layout pageName="Overview" subPageName="User">

            <div className="viewCupon-actions">
                    <div className="edit-btn-cupon">
                        <Link to="/edit_coupon">
                        <button>Edit  <div class="icon-image-container"><img src={EditPNG}/></div></button>
                        </Link>
                        
                    </div>

                    <div className="Deactivate-btn-cupon">
                        <button>Deactivate <span className="fa fa-times-circle-o"></span></button>
                        <button>Delete <span className="fa fa-trash"></span></button>
                    </div>

                </div>

                <div className="cupon_statics">
                    <div className="cuponImg">
                        
                        <img src={User}/>
                        <div className="about-viewCupon">
                        <p>Adeyemi Adesanya</p>
                        <button>Active</button>
                    </div>
                    </div>

                    

                    <div className="cupon-detailsbe7">
                        <p> <span>Phone Number:</span>   08123456789</p>
                        <p style={{color:"#2D4EF5"}}> <span >Email:</span>   emmanuelkix67@gmail.com</p>
                    </div>

                    <div className="cupon-detailsbe7">
                    <p><span>Location:</span>  Lagos</p>
                        <p><span>Tokenfy ID:</span>   TKF001</p>
                    </div>

                   
                </div>

                <section className="page-section">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="card bg-dark">
                                <h3 className="text-white">Wallet Balance</h3>
                                <h1 className="bold-550 text-white mt-5 mb-5 text-center"><span className="bold-550">N</span>20,000</h1>
                            </div>
                            <Link to="/wallet" className="btn btn-warning btn-block mt-3">View Wallet</Link>
                        </div>
                        <div className="col-md-5">
                            <div className="card mt-3">
                                <h5 className="text-muted bold-550">Top Claimed Categories</h5>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="cupon-claimers-overview mt-3">
                    <span>Coupons</span>
                </div>
                <div className="Table-sec">
                  <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead className="mb-20">
                        <tr>
                            <th className="th-sm">MERCHANT
                            </th>
                            <th className="th-sm">TYPE
                            </th>
                            <th className="th-sm">
                                CATEGORY
                            </th>
                            <th className="th-sm">
                                OFFER
                            </th>
                            <th className="th-sm">
                                TAKE DATE
                            </th>
                            <th className="th-sm">
                                EXPIRING
                            </th>
                            <th className="th-sm">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...'123456'].map(()=>(
                                <tr>
                                    <td>
                                        <p>Jumia</p>
                                    </td>
                                    <td>
                                        <p>Cashback</p>
                                    </td>
                                    <td>
                                        Travels
                                    </td>
                                    <td>
                                        30%
                                    </td>
                                    <td>
                                        10/11/2020
                                    </td>
                                    <td>
                                        10/11/2022
                                    </td>
                                    <td>
                                        <button className="restore-action-button mr-3">Active</button> 
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>

                  </div>

                  <div className="marchant-recents-data">
                      <h1>Recent Activities</h1>

                      <div className="marchant-recents-data-wrap">
                    <div className="mes-merchant">
                                        <h3>Replied to a review </h3>
                                        <h2>“ We appreciate your comment, we will continue to work to make our services better”</h2>
                                    </div>

                                    <div className="mes-merchant-time">
                                    15mins ago
                                    </div>
                      </div>


                      <div className="marchant-recents-data-wrap">
                    <div className="mes-merchant">
                                        <h3>Replied to a review </h3>
                                        <h2>“ We appreciate your comment, we will continue to work to make our services better”</h2>
                                    </div>

                                    <div className="mes-merchant-time">
                                    15mins ago
                                    </div>
                      </div>


                      <div className="marchant-recents-data-wrap">
                    <div className="mes-merchant">
                                        <h3>Replied to a review </h3>
                                        <h2>“ We appreciate your comment, we will continue to work to make our services better”</h2>
                                    </div>

                                    <div className="mes-merchant-time">
                                    15mins ago
                                    </div>
                      </div>

                  

                  </div>
               
            
            </Layout>
        </div>
    )
}


