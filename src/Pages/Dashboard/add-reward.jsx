import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../Components/Assets/calendar.png'
export default function AddReward(props) {
    
    return (
        <div>
            <Layout pageName="Reward" subPageName="Add Reward">
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
                            <DatePicker />
                            <div className="icon"><img src={calendar}></img></div>
                                
                            </div>
                            
                </div>


                <div className="cupon-input-box">
                            <label htmlFor="">End Date <span>*</span></label>
                            <div className="inputbox-cupon">
                            <DatePicker />
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
            </Layout>
        </div>
    )
}


