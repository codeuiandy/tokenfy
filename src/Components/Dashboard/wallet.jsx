import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import User from '../Assets/user.png'
import CardGiftPNG from '../Assets/icons/card_gift.png';

export default function Wallet(props) {
    return (
        <div>
            <Layout pageName="Overview" subPageName="User">

                <div className="cupon_statics full-width">
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
                        <div className="col-md-12 p-0">
                            <div className="card bg-dark">
                                <h3 className="text-white">Wallet Balance</h3>
                                <h1 className="bold-550 text-white mt-5 mb-5 text-center"><span className="bold-550">N</span>20,000</h1>
                            </div>
                        </div>
                        
                        <div className="col-md-6 mt-4">
                            <div className="icon-image-container-no-margin mr-3">
                                <img 
                                    src={CardGiftPNG}
                                />
                            </div>
                            <h4 className="bold-550 icon-image-desc">Rewards</h4>
                        </div>
                        <div className="col-md-6 mt-4 text-right p-0">
                            <button className="btn btn-primary btn-primary-outline mr-4"><span className="fa fa-pencil"></span> Edit</button>
                            <Link to="/add-reward" className="btn btn-primary"><span className="fa fa-plus"></span> Add Reward</Link>
                        </div>
                    </div>
                </section>

                <div className="page-section mb-4">
                    <div className="row">
                       {
                           [...'123456'].map(value=>(
                            <div className="col-md-3 mb-3">
                                <div className="card">
                                    <div className="header">
                                        <h6>
                                            Jumia
                                            <button className="restore-action-button pull-right">Active</button> 
                                        </h6>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="bold-550">Free Delivery</h3>
                                        <p className="text-muted">10/11/2010 - 20/11/2020</p>
                                    </div>
                                    <div className="border-top-1 mt-2">
                                        <span><small className="text-warning">3/5</small> <small>left</small></span>
                                        <Link className="pull-right text-warning"><small>Delete <span className="fa fa-trash"></span></small></Link>
                                    </div>
                                </div>
                            </div>
                           ))
                       }
                    </div>
                </div>
            </Layout>
        </div>
    )
}


