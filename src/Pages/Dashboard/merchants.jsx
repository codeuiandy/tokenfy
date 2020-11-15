import React,{useEffect, useState} from 'react'
import {Layout} from '../../Components/Layout/layout';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'

export default function CreateMerchant(props) {
    useEffect(() => {
    
        getCategories()
    }, [])

    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())

    const [createMerchant, setCreateMerchant] = useState({
        categoryId : "",
        merchantName : "",
        phoneNumber  : "",
        email  : "",
        location  : "",
        description  : "",
        logo:"",
    })


    const [catagories,setCatgoryies] = useState([])

    const  getCategories =async()=>{

        try {
          showLoader()
            const res = await httpGet(`admin/categories/`)
            if (res.status === 200) {
            
                setCatgoryies(res.data.data.categories)
                console.log(res.data.data.categories)
            }
            console.log(res)
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
             const formData = new FormData();
             formData.append('merchantName', createMerchant.merchantName);
             formData.append('categoryId',  createMerchant.categoryId);
             formData.append('phoneNumber',  createMerchant.phoneNumber);
             formData.append('email',  createMerchant.email);
             formData.append('location',  createMerchant.location);
             formData.append('description',  createMerchant.description);
             formData.append('logo',  createMerchant.logo);

              let res = await httpPostFormData("admin/merchant/create/",formData)
              console.log("res status",res) 
              if (res.status === 201 || res.status === 200) {
                      hideLoader()
                      setCreateMerchant({
                        categoryId : "",
                        merchantName : "",
                        phoneNumber  : "",
                        email  : "",
                        location  : "",
                        description  : "",
                        logo:"",
                    })
             
         
               NotificationManager.success(
                  "Merchant created successfully",
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

            setCreateMerchant({...createMerchant, [e.target.name]: e.target.value })
            console.log(createMerchant)
  
       }

      const handleFileChange=(e)=>{
        setCreateMerchant({...createMerchant, [e.target.name]:e.target.files[0] })
            console.log(createMerchant)
      }
      
    
    return (
        <div>
            <Layout pageName="Add Merchant">
                <form onSubmit={handleSubmit}>
             
                        <div className="create-cupon-page">

                        <div className="create-conpon-container">

                            <div className="cupon-input-box">
                                    <label htmlFor="">Merchant Title <span>*</span></label>
                                    <div className="inputbox-cupon">
                                       <input required value={createMerchant.merchantName} name="merchantName" onChange={handleChange}  type="text"/>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Phone Number<span>*</span></label>
                                    <div className="inputbox-cupon">
                                     <input required value={createMerchant.phoneNumber} name="phoneNumber" onChange={handleChange} type="number"/>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Email <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input required value={createMerchant.email} name="email" onChange={handleChange} type="email"/>
                                         
                                    </div>
                                    
                        </div>


                       

                        <div className="cupon-input-box">
                                    <label htmlFor="">Category(ies) <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select required value={createMerchant.categoryId} name="categoryId" onChange={handleChange}>
                                            <option value="">Select</option>
                                            {
                                                catagories.map((data)=>{
                                                    return(
                                                <option value={data.id}>{data.category}</option>)
                                                })
                                            }
                                         
                                    
                                         </select>
                                         
                                    </div>
                                    
                        </div>

                        
                        


                        <div className="cupon-input-box">
                                    <label htmlFor="">Address/Location<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input required value={createMerchant.location} name="location" onChange={handleChange} type="text"/>
                                        
                                    </div>
                                    
                        </div>

                        

                        
                            
                    </div>

                    {/* CUPON DROPDOWNS END HERE */}
                    <div className="cupon-text-area-box">
                              <div className="cupon-input-box textareaCon">
                                    <label htmlFor="">Logo (PNG format only)<span>*</span></label>
                                    <div className="inputbox-cupon">
                                    <div className="upload_form marchant_upload_form">
                    <div className="dragDropArea upload_col marchant-drag-and-drop">
                        <form className="uploadCuponImage">
                            <span>Drag and drop file here</span>
                            <div className="upload97">or</div>
                    
                            <button className="uploadCupon-file" >Upload</button>
                            <input type="file" accept=".png,.jpg,.jpeg"  required  name="logo" onChange={handleFileChange}/>
                        </form>
                    </div>
                    </div>
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box textareaCon">
                                    <label htmlFor="">Description<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <textarea onChange={handleChange} required name="description" value={createMerchant.description}  type="text"/>
                                        <span className="cuponTextCount">500 <span>Characters left.</span></span>
                                    </div>
                                    
                        </div>
          
                
            </div>


            <div className="submit-cupon-button">
                {/* <button className="activaeSubmit-cupon">Preview</button> */}
                <button className="activaeSubmit-cupon">Submit</button>
            </div>
                    

                  

                       

                            
            </div>
                        
            </form>
            </Layout>
        </div>
    )
}


