import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import User from '../Assets/user.png'
export default function ViewCupon(props) {
    const[activePage,setActivePage] = useState("Review_Category_All");
    const[startDate,setStartDate] = useState(new Date());
    return (
        <div>
            <Layout  NavRouter={props.location.pathname}>

                <div className="viewCupon-actions">
                    <div className="edit-btn-cupon">
                        <Link to="/edit_cupon">
                        <button>Edit</button>
                        </Link>
                        
                    </div>

                    <div className="Deactivate-btn-cupon">
                        <button>Deactivate</button>
                        <button>Delete</button>
                    </div>

                </div>

                <div className="cupon_statics">
                    <div className="cuponImg">
                        
                        <img src={User}/>
                        <div className="about-viewCupon">
                        <p>Rx Pharmacy</p>
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

                <div className="des-section76g">
                    <h1>Description</h1>
                    <p>An online coupon that deals in various goods ranging from electronics to any o
                        ther suitable text for this section. Any other suitable text for this section.</p>
                </div>
                 

                  <div className="cupon-claimers-overview">
                      <span>Coupons</span>
                      
                  </div>

                  <div style={{marginTop:"17px"}} className="Table-sec"></div>

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


