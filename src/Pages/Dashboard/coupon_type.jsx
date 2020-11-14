import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import "react-datepicker/dist/react-datepicker.css";

export default function CouponType(props) {
    
    return (
        <div>
            <Layout pageName="Create" subPageName="Coupon type">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Coupon type<span>*</span></label>
                            <div className="inputbox-cupon">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                   <div className="col-md-6">
                       <div className="form-group">
                            <label htmlFor="">Descriptions<span>*</span></label>
                            <div className="inputbox-cupon">
                                <textarea type="text" className="form-control" rows='5' cols='6' />
                                <span className="text-primary">500 <span>Characters left.</span></span>
                            </div>
                       </div>
                   </div>
                   <div className="col-md-12 pr-5">
                        <button className="btn btn-primary mr-3 pull-right">Submit</button>
                    </div>

                </div>
        
            </Layout>
        </div>
    )
}


