import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './index.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowDown from '../Assets/arrowDown.png'
import calendar from '../Assets/calendar.png'
import Remove from '../Assets/close.png'
import barCode from '../Assets/barCode.png'
import kfc from '../Assets/kfc.png'

export default function CreateCupon(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    const [couponActions, setCouponActions] = useState({
        CouponDropDown:false,
        couponType:"A",

        LogoDropDown:false,
        LogoName:"Jumai.png",
    })
    
    return (
        <div>
            <Layout pageName="Coupons" subPageName="Create Coupons">
                <div className="page-router-display">

                    <div className="page-roter-list">
                        <div>
                            <div className="hsd">
                                <span
                                onClick={()=>setActivePage("Coupon_Properties")}
                                 className={`page-router-name 
                                ${activePage==="Coupon_Properties"?"page-router-name-active":""}`}>
                                    Coupon Properties</span>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("Images_and_videos")}}
                                 className={`page-router-name 
                                ${activePage==="Images_and_videos"?"page-router-name-active":""}`}>
                                    Look & Feel</span>
                            </div>
                        </div>
                        {/* <div><button></button></div> */}
                    </div>

                    <div className="pg-dimacation"></div>

                </div>


                {
                    activePage==="Coupon_Properties" ? (
                        <div className="create-cupon-page">

                      <div className="create_qr_coupon_two">

                        <div style={couponActions.CouponDropDown === false ? 
                            {border:"none"}: {}} className="create_qr_coupon_two-wrap">

                         <div className="create_qr_coupon_two-input">
                             <label>Frame</label>
                               <input value={`Type ${couponActions.couponType}`} type="text"
                               onClick={()=>setCouponActions({
                                   ...couponActions,CouponDropDown:!couponActions.CouponDropDown
                               })}
                               />
                               <img onClick={()=>setCouponActions({
                                   ...couponActions,CouponDropDown:!couponActions.CouponDropDown
                               })} src={ArrowDown} alt="" srcset=""/>
                          </div>
                        {
                             couponActions.CouponDropDown === true ? (
                                <div className="qr-drop-down-actions">

                                    <div className="b-code-wrap-coupon">
                                        <div className="create_qr_coupon_two-options">
                                        <img src={barCode} alt="" srcset=""
                                        onClick={()=>setCouponActions({
                                            ...couponActions,couponType:"A"
                                        })}
                                        />
                                        
                                    </div>
                                    <span>A</span>
                                    </div>

                                    <div className="b-code-wrap-coupon">
                                    <div className="create_qr_coupon_two-options">
                                    <img src={barCode} alt="" srcset=""
                                    onClick={()=>setCouponActions({
                                        ...couponActions,couponType:"B"
                                    })}
                                    />
                                    
                                </div>
                                <span>B</span>
                                </div>


                                <div className="b-code-wrap-coupon">
                                    <div className="create_qr_coupon_two-options">
                                    <img src={barCode} alt="" srcset=""
                                    onClick={()=>setCouponActions({
                                        ...couponActions,couponType:"C"
                                    })}
                                    />
                                    
                                </div>
                                <span>C</span>
                                </div>


                                <div className="b-code-wrap-coupon">
                                    <div className="create_qr_coupon_two-options">
                                    <img src={barCode} alt="" srcset=""
                                    onClick={()=>setCouponActions({
                                        ...couponActions,couponType:"D"
                                    })}
                                    />
                                    
                                </div>
                                <span>D</span>
                                </div>


                                <div className="b-code-wrap-coupon">
                                    <div className="create_qr_coupon_two-options">
                                    <img src={barCode} alt="" srcset=""
                                    onClick={()=>setCouponActions({
                                        ...couponActions,couponType:"E"
                                    })}
                                    />
                                    
                                </div>
                                <span>E</span>
                                </div>


                                



                    </div> 



                             ):
                             ""
                        }
                  
                       
                        

                        </div>
                         
                      </div>



                      <div className="create_qr_coupon_two">

<div style={{border:"none"}} className="create_qr_coupon_two-wrap">

 <div className="create_qr_coupon_two-input">
 <label>Color</label>
       <input type="text" />
      
  </div>









</div>
 
</div>







<div className="create_qr_coupon_two">

<div style={couponActions.LogoDropDown === false ? 
    {border:"none"}: {}} className="create_qr_coupon_two-wrap">

 <div className="create_qr_coupon_two-input">
 <label>Logo</label>
       <input value={`${couponActions.LogoName}`} type="text"
       onClick={()=>setCouponActions({
           ...couponActions,LogoDropDown:!couponActions.LogoDropDown
       })}
       />
       <img onClick={()=>setCouponActions({
           ...couponActions,LogoDropDown:!couponActions.LogoDropDown
       })} src={ArrowDown} alt="" srcset=""/>
  </div>
{
     couponActions.LogoDropDown === true ? (
        <div className="qr-drop-down-actions">

            <div className="b-code-wrap-coupon">
                <div className="create_qr_coupon_two-options create_qr_coupon_two-logo">
                <img src={kfc} alt="" srcset=""
                onClick={()=>setCouponActions({
                    ...couponActions,LogoName:"Omega.png"
                })}
                />
                
            </div>
          
            </div>

            <div className="b-code-wrap-coupon">
            <div className="create_qr_coupon_two-options create_qr_coupon_two-logo">
            <img src={kfc} alt="" srcset=""
            onClick={()=>setCouponActions({
                ...couponActions,LogoName:"KFC.png"
            })}
            />
            
        </div>
       
        </div>


        <div className="b-code-wrap-coupon">
            <div className="create_qr_coupon_two-options create_qr_coupon_two-logo">
            <img src={kfc} alt="" srcset=""
            onClick={()=>setCouponActions({
                ...couponActions,LogoName:"VMC.png"
            })}
            />
            
        </div>
        
        </div>


        <div className="b-code-wrap-coupon">
            <div className="create_qr_coupon_two-options create_qr_coupon_two-logo ">
            <img src={kfc} alt="" srcset=""
            onClick={()=>setCouponActions({
                ...couponActions,LogoName:"Orange.png"
            })}
            />
            
        </div>
      
        </div>


        <div className="b-code-wrap-coupon">
            <div className="create_qr_coupon_two-options create_qr_coupon_two-logo">
            <img src={kfc} alt="" srcset=""
            onClick={()=>setCouponActions({
                ...couponActions,LogoName:"Apple.png"
            })}
            />
            
        </div>
     
        </div>


        


</div> 



     ):
     ""
}




</div>
 
</div>


                       

               
        <div style={{marginTop:"90px"}} className="submit-cupon-button">
                    <button className="activaeSubmit-cupon">Preview</button>
                    <button className="publish_button">Publish</button>
                </div>             
            </div>
                        
                    ) :
                    
                    
                    ""
                }

              

            {
                activePage==="Images_and_videos"?
                
                <div>
                <div className="upload_form">
                    <div className="dragDropArea upload_col">
                        <form className="uploadCuponImage">
                            <span>Drag and drop file here</span>
                            <div className="upload97">or</div>
                    
                            <button className="uploadCupon-file" >Upload</button>
                            <input  type="file" name="pictures"/>
                        </form>
                    </div>
    
                    <div class="upload_col viewUploadsv">

                        <div className="fileUploadinfo">
                            <h1>You can only upload not more than 2 files </h1>
                       <h2>(JPEG, MP4 of not more than 10MB)</h2>
                        </div>

                        <div className="uploads-section">
                            <h1>Uploads</h1>
                        </div>
                       

                       <div className="viewUploads">
                           <div className="fileType">Mp4</div>
                           <div className="fileName">
                               <div>Video 334523_23</div>
                               <div>8mb</div>
                           </div>
                           <div className="RemoveFile">
                               <img src={Remove} alt="" srcset=""/>
                           </div>
                       </div>

                       <div className="viewUploads">
                           <div className="fileType">Mp4</div>
                           <div className="fileName">
                               <div>Video 334523_23</div>
                               <div>8mb</div>
                           </div>
                           <div className="RemoveFile">
                               <img src={Remove} alt="" srcset=""/>
                           </div>
                       </div>


                       <div className="viewUploads">
                           <div className="fileType">Mp4</div>
                           <div className="fileName">
                               <div>Video 334523_23</div>
                               <div>8mb</div>
                           </div>
                           <div className="RemoveFile">
                               <img src={Remove} alt="" srcset=""/>
                           </div>
                       </div>

                       <div className="viewUploads">
                           <div className="fileType">Mp4</div>
                           <div className="fileName">
                               <div>Video 334523_23</div>
                               <div>8mb</div>
                           </div>
                           <div className="RemoveFile">
                               <img src={Remove} alt="" srcset=""/>
                           </div>
                       </div>


                       
                    </div>
                </div>
                <div className="submit-cupon-button">
                    <button className="activaeSubmit-cupon">Preview</button>
                    <button className="publish_button">Publish</button>
                </div>
            </div>
            :""
        }


            </Layout>
        </div>
    )
}


