import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './cupon.css'
import ArrowDown from '../Assets/arrowDown.png'
export default function Cupons() {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    return (
        <div>
            <Layout>
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
                                        <div className="icon"><img src={ArrowDown}></img></div>
                                    </div>
                                    
                        </div>

                        
                            
                    </div>


                           <div className="create-conpon-container">

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
                                        <select>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         </select>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">End Date <span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <select>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         <option value="">data</option>
                                         </select>
                                         
                                    </div>
                                    
                        </div>


                        <div className="cupon-input-box">
                                    <label htmlFor="">Coupon Code<span>*</span></label>
                                    <div className="inputbox-cupon">
                                        <input type="text"/>
                                        <div className="icon"><img src={ArrowDown}></img></div>
                                    </div>
                                    
                        </div>

                        
                            
                    </div>



                            
                </div>
            </Layout>
        </div>
    )
}


