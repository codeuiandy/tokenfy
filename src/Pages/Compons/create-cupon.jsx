import React,{useState,useEffect} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './cupon.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../Components/Assets/calendar.png'
import Remove from '../../Components/Assets/close.png'
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'
import axios from 'axios'
import moment from 'moment'
export default function CreateCupon(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())

    useEffect(() => {
    
        getData()
    }, [])
    

    const [createCoupon, setCreateCoupon] = useState({
        limits  : "",
        categoryId:"",
        restriction:"",
        couponType :"",
        couponWeblink:"",
        percentageAmount :"",
        code :"",
        mediaFile:"",
        merchantId:"",
    })



    const [getAllCouponType,setgetAllCouponType] = useState([])
    const [getAllcategory,setgetAllcategory] = useState([])
    const [Merchants, settMerchants] = useState([])
    const  getData =async()=>{

        try {
          showLoader()
            const res1 = await httpGet(`coupon_type/retrieve/`)
            const res2 = await httpGet(`admin/categories/`)
            const res3 = await httpGet(`admin/all_merchants/`)
              const all = await axios.all([res1, res2,res3])

            if (all[0].status === 200 || all[0].status === 201) {

                setgetAllCouponType(all[0].data.data.couponType)
                
            }

            if (all[1].status === 200 || all[1].status === 201) {
                setgetAllcategory(all[1].data.data.categories)
                console.log("test>>",getAllcategory.categories)
                console.log("test>>",all[1].data.data)
            }

            if (all[2].status === 200 || all[2].status === 201) {
                settMerchants(all[2].data.data.data)
                console.log("test>>",all[2].data.data.data)
            }

        

            hideLoader()
        } catch (error) {
          hideLoader()
        }
    }

    
    const handleSubmit=async(e)=>{
        e.preventDefault();
                
           e.preventDefault();
           try {
             showLoader()
            //  limits  : "",
            //  categoryId:"",
            //  restriction:"",
            //  couponType :"",
            //  couponWeblink:"",
            //  percentageAmount :"",
            //  code :"",
            //  mediaFile:"",
             const formData = new FormData();
             formData.append('merchantId ', createCoupon.merchantId );
             formData.append('categoryId',  createCoupon.categoryId);
             formData.append('restriction',  createCoupon.restriction);
             formData.append('couponType',  createCoupon.couponType);
             formData.append('couponWeblink',  createCoupon.couponWeblink);
             formData.append('description',  createCoupon.description);
             formData.append('percentageAmount',  createCoupon.percentageAmount);
             formData.append('limits',  createCoupon.limits);
             formData.append('code',  createCoupon.code);
             formData.append('mediaFile',  createCoupon.mediaFile);
             formData.append('startDate', moment(startDate).format("YYYY-MM-DDThh:mm"));
             formData.append('startDate',  moment(endDate).format("YYYY-MM-DDThh:mm"));

              let res = await httpPostFormData("admin/coupon/create/",formData)
              console.log("res status",res) 
              if (res.status === 201 || res.status === 200) {
                      hideLoader()
                      setCreateCoupon({
                        categoryId : "",
                        CouponName : "",
                        phoneNumber  : "",
                        email  : "",
                        location  : "",
                        description  : "",
                        logo:"",
                    })
             
         
               NotificationManager.success(
                  "Coupon created successfully",
                 "Yepp",
                 4000
             );

             
            
              }
              
             
           
               hideLoader()
         } catch (error) {
             console.log(error.response)
             NotificationManager.error(
                 error,
                "Opps",
                3000
            );
             hideLoader()
       
         }
        }
       
  

    
    
    const  handleChange=(e)=>{

            setCreateCoupon({...createCoupon, [e.target.name]: e.target.value })
            console.log(createCoupon)
  
       }


      const handleFileChange=(e)=>{
        setCreateCoupon({...createCoupon, [e.target.name]:e.target.files[0] })
            console.log(createCoupon)
      }


    
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
                                    <label htmlFor="">Merchant  <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select required  onChange={handleChange} required name="merchantId" value={createCoupon.merchantId}>
                                         <option value="">Select</option>
                                         {
                                                Merchants?Merchants.map((data)=>{
                                                    return(
                                                <option value={data.id}>{data.merchantName}</option>)
                                                }):[]
                                            }
                                         </select>
                                         
                                    </div>

                        </div>

                        
                        <div className="cupon-input-box">
                                    <label htmlFor="">Coupon  Type <span>*</span></label>
                                    <div className="inputbox-cupon">
                                    <select required value={createCoupon.couponType} name="couponType" onChange={handleChange}>
                                            <option value="">Select</option>
                                            {
                                                getAllCouponType?getAllCouponType.map((data)=>{
                                                    return(
                                                <option value={data.couponType}>{data.couponType}</option>)
                                                }):[]
                                            }
                                         
                                    
                                         </select>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Percentage/Amount <span>*</span></label>
                                    <div className="inputbox-cupon">
                                    <input onChange={handleChange} required name="percentageAmount" value={createCoupon.percentageAmount} type="text"/>

                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Limits<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input onChange={handleChange} required name="limits" value={createCoupon.limits} type="number"/>
                                       
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box">
                                    <label htmlFor="">Category <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select onChange={handleChange} required name="categoryId" value={createCoupon.categoryId }>
                                        <option value="">Select</option>
                                            {
                                               getAllcategory?
                                               getAllcategory.map((data)=>{
                                                return(
                                            <option value={data.id}>{data.category}</option>)
                                            })
                                               : []
                                            }
                                         </select>
                                         
                                    </div>
                                    
                        </div>

                        
                        <div className="cupon-input-box">
                                    <label htmlFor="">Start Date <span>*</span></label>
                                    <div className="inputbox-cupon">
                                    <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    minDate={new Date()}
                                    />
                                    <div className="icon"><img src={calendar}></img></div>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">End Date <span>*</span></label>
                                    <div className="inputbox-cupon">
                                    <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    minDate={startDate}
                                    />
                                    <div  className="icon"><img src={calendar}></img></div>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Coupon Code<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input onChange={handleChange} required name="code" value={createCoupon.code} type="text"/>
                                        
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box">
                                    <label htmlFor="">Coupon web link<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input onChange={handleChange} required name="couponWeblink" value={createCoupon.couponWeblink} type="text"/>
                                        
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box">
                                    <label htmlFor="">Media<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input onChange={handleFileChange} required name="mediaFile"  type="file"/>
                                        
                                    </div>
                                    
                        </div>

                        

                        
                            
                    </div>

                    {/* CUPON DROPDOWNS END HERE */}
                    <div className="cupon-text-area-box">
                              <div className="cupon-input-box textareaCon">
                                    <label htmlFor="">Description<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <textarea onChange={handleChange} required name="description" value={createCoupon.description} type="text"/>
                                        <span className="cuponTextCount">500 <span>Characters left.</span></span>
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box textareaCon">
                                    <label htmlFor="">Restrictions<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <textarea onChange={handleChange} required name="restriction" value={createCoupon.restriction} type="text"/>
                                        <span className="cuponTextCount">500 <span>Characters left.</span></span>
                                    </div>
                                    
                        </div>
          
                
            </div>


            <div className="submit-cupon-button">
                {/* <button className="activaeSubmit-cupon">Preview</button> */}
                <button onClick={handleSubmit} className="activaeSubmit-cupon">Submit</button>
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


