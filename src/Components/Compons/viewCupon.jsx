import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './cupon.css'
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
                        <p> <span>Limit:</span>  178</p>
                        <p> <span>Category:</span>   Health & Finance</p>
                    </div>

                    <div className="cupon-detailsbe7">
                    <p><span>Coupon Type:</span> Casback</p>
                        <p><span>Tokenfy ID:</span>   TKF001</p>
                    </div>

                    <div className="cupon-detailsbe7">
                    <p> <span>Start Date:</span> 21/10/2020</p>
                        <p> <span>End Date: </span> 21/10/2020</p>
                    </div>
                </div>

                <div className="des-section76g">
                    <h1>Description</h1>
                    <p>An online coupon that deals in various goods ranging from electronics to any o
                        ther suitable text for this section. Any other suitable text for this section.</p>
                </div>
                  <div className="rest76">
                      <h1>Restrictions</h1>
                       <div className="restriction-cupons">
                    <p>Any suitable text for this section</p>
                    <p>Any suitable text for this section</p>
                    <p>Any suitable text for this section</p>
                    <p>Any suitable text for this section</p>
                </div>
                  </div>

                  <div className="cupon-claimers">
                      <span>Claimers</span>
                      <button>55/178</button>
                      <span>coupons remaining(updated 15minutes ago)</span>
                  </div>

                  <div className="Table-sec"></div>
               
            
            </Layout>
        </div>
    )
}


