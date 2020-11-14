import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './cupon.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../Components/Assets/calendar.png'
import Remove from '../../Components/Assets/close.png'
export default function CreateCupon(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
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
                                    Images and videos</span>
                            </div>
                        </div>
                        {/* <div><button></button></div> */}
                    </div>

                    <div className="pg-dimacation"></div>

                </div>


                {
                    activePage==="Coupon_Properties" ? (
                        <div className="create-cupon-page">

                        <div className="create-conpon-container">

                            <div className="cupon-input-box">
                                    <label htmlFor="">Merchant <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         </select>
                                         
                                    </div>
                                    
                        </div>

                        
                        <div className="cupon-input-box">
                                    <label htmlFor="">Coupon  Type <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         </select>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Percentage/Amount <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         </select>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Limits<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input type="text"/>
                                       
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box">
                                    <label htmlFor="">Category <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         </select>
                                         
                                    </div>
                                    
                        </div>

                        
                        <div className="cupon-input-box">
                                    <label htmlFor="">Start Date <span>*</span></label>
                                    <div className="inputbox-cupon">
                                    <DatePicker
   
                                    closeOnScroll={true}
                                    selected={startDate} 
                                    onChange={date => setstartDate({startDate:date})  }
                                    // withPortal

                                    minDate={new Date()}
                                    />
                                    <div className="icon"><img src={calendar}></img></div>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">End Date <span>*</span></label>
                                    <div className="inputbox-cupon">
                                    <DatePicker
   
                                    closeOnScroll={true}
                                    selected={startDate} 
                                    onChange={date => setstartDate({startDate:date})  }
                                    // withPortal

                                    minDate={new Date()}
                                    />
                                    <div  className="icon"><img src={calendar}></img></div>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Coupon Code<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input type="text"/>
                                        
                                    </div>
                                    
                        </div>

                        

                        
                            
                    </div>

                    {/* CUPON DROPDOWNS END HERE */}
                    <div className="cupon-text-area-box">
                              <div className="cupon-input-box textareaCon">
                                    <label htmlFor="">Description<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <textarea type="text"/>
                                        <span className="cuponTextCount">500 <span>Characters left.</span></span>
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box textareaCon">
                                    <label htmlFor="">Restrictions<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <textarea type="text"/>
                                        <span className="cuponTextCount">500 <span>Characters left.</span></span>
                                    </div>
                                    
                        </div>
          
                
            </div>


            <div className="submit-cupon-button">
                <button className="activaeSubmit-cupon">Preview</button>
                <button className="InactivaeSubmit-cupon">Submit</button>
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


