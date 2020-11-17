import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import "react-datepicker/dist/react-datepicker.css";
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'
export default function CouponType(props) {
    
    const [createCouponType, setCreateCouponType] = useState({
        couponType: "",
        description: ""})
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
                
           e.preventDefault();
           try {
             showLoader()
              let res = await httpPost("coupon_type/create",createCouponType)
              console.log("res status",res) 
              if (res.status === 201 || res.status === 200) {
                      hideLoader()
                      setCreateCouponType({
                        couponType: "",
                      description: ""
                    })
             
         
               NotificationManager.success(
                  "CouponType created successfully",
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

            setCreateCouponType({...createCouponType, [e.target.name]: e.target.value })
            console.log(createCouponType)
  
       }
    
    return (
        <form onSubmit={handleSubmit}>
            <Layout pageName="Create" subPageName="CouponType">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="">CouponType Title<span>*</span></label>
                            <div className="inputbox-cupon">
                                <input value={createCouponType.couponType} name="couponType" onChange={handleChange} required type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                   <div className="col-md-6">
                       <div className="form-group">
                            <label htmlFor="">Descriptions<span>*</span></label>
                            <div className="inputbox-cupon">
                                <textarea value={createCouponType.description}  name="description" onChange={handleChange} required type="text" className="form-control" rows='5' cols='6' />
                                <span className="text-primary">500 <span>Characters left.</span></span>
                            </div>
                       </div>
                   </div>
                   <div className="col-md-12 pr-5">
                        <button className="btn btn-primary mr-3 pull-right">Submit</button>
                    </div>

                </div>
        
            </Layout>
        </form>
        
    )
}


