import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function CreateMerchant(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout pageName="Add Merchant">
             
                        <div className="create-cupon-page">

                        <div className="create-conpon-container">

                            <div className="cupon-input-box">
                                    <label htmlFor="">Merchant Title <span>*</span></label>
                                    <div className="inputbox-cupon">
                                       <input type="text"/>
                                         
                                    </div>
                                    
                        </div>

                        
                        <div className="cupon-input-box">
                                    <label htmlFor="">Phone Number<span>*</span></label>
                                    <div className="inputbox-cupon">
                                     <input type="text"/>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Email <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input type="text"/>
                                         
                                    </div>
                                    
                        </div>


                       

                        <div className="cupon-input-box">
                                    <label htmlFor="">Category(ies) <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         </select>
                                         
                                    </div>
                                    
                        </div>

                        
                        


                        <div className="cupon-input-box">
                                    <label htmlFor="">Address/Location<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input type="text"/>
                                        
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
                            <input  type="file" name="pictures"/>
                        </form>
                    </div>
                    </div>
                                    </div>
                                    
                        </div>

                        <div className="cupon-input-box textareaCon">
                                    <label htmlFor="">Description<span>*</span></label>
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
                        
               
            </Layout>
        </div>
    )
}


