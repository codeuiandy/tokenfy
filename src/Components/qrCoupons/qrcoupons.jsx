import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import '../Compons/cupon.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowDown from '../Assets/arrowDown.png'
import calendar from '../Assets/calendar.png'
import Remove from '../Assets/close.png'

export default function QrCoupons(props) {
    const[activePage,setActivePage] = useState("Coupon_Properties");
    const [startDate, setstartDate] = useState(new Date());
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <div className="page-router-display">
                    {/* <CuponsTable/> */}
                        <div className="page-roter-list">
                            <div>
                                <div className="hsd">
                                    <span
                                    onClick={(e)=>{setActivePage("Coupon_Properties")}}
                                    className={`page-router-name 
                                    ${activePage==="Coupon_Properties"?"page-router-name-active":""}`}>
                                        Coupon Properties</span>
                                </div>
                                <div className="hsd">
                                    <span
                                    onClick={(e)=>{setActivePage("Look_Feel")}}
                                    className={`page-router-name 
                                    ${activePage==="Look_Feel"?"page-router-name-active":""}`}>
                                        Look & Feel</span>
                                </div>
                            </div>
                        </div>
                        <div className="pg-dimacation"></div>

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
                                        <label htmlFor="">Restrictions<span>*</span></label>
                                        <div className="inputbox-cupon">
                                            <textarea type="text"/>
                                            <span className="cuponTextCount">500 <span>Characters left.</span></span>
                                        </div>
                                        
                            </div>
            
                    
                </div>


                <div className="submit-cupon-button">
                    <button className="publish_button">Next >></button>
                </div>
                        

                    

                        

                                
                </div>
                            ):
                            ""
                        }
                </div>
            </Layout>
        </div>
    )
}
