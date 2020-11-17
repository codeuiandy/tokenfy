import React,{useState,useEffect} from 'react'
import {Layout} from '../../Components/Layout/layout';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import User from '../../Components/Assets/user.png'
import EditPNG from '../../Components/Assets/icons/white_edit.png';
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'

export default function MerchantOverview(props) {
    const [Merchants, settMerchants] = useState([])

    useEffect(() => {
    
        getMerchant()
    }, [])

    const  getMerchant =async()=>{

        try {
          showLoader()
            const res = await httpGet(`admin/all_mercants/`)
            if (res.status === 200) {
            
                settMerchants(res.data.data.categories)
                console.log(res.data.data.categories)
            }
            console.log(res)
            hideLoader()
        } catch (error) {
          hideLoader()
        }
    }

    return (
        <div>
            <Layout pageName="Overview" subPageName="Merchants">

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


