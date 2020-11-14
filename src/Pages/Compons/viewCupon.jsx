import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './cupon.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import User from '../../Components/Assets/user.png'
import EditPNG from '../../Components/Assets/icons/white_edit.png';
export default function ViewCupon(props) {
    const[activePage,setActivePage] = useState("Review_Category_All");
    const[startDate,setStartDate] = useState(new Date());
    return (
        <div>
            <Layout  pageName="Rx Pharmacy 30% Cashback">

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
                      <button className="pl-2 pr-2 pt-1 pb-1">55/178</button>
                      <span>coupons remaining(updated 15minutes ago)</span>
                  </div>

                  <div className="Table-sec">
                  <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead className="mb-20">
                        <tr>
                            <th className="th-sm">TAKE BY
                            </th>
                            <th className="th-sm">TAKE DATE
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
                                        <p>RX Pharmacy</p>
                                    </td>
                                    <td>
                                        <p>Adekunle Akintade</p>
                                    </td>
                                    <td>
                                        20/10/2020
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
               
            
            </Layout>
        </div>
    )
}


