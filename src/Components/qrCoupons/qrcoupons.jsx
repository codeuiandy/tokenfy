import React,{useState} from 'react'
import { Layout } from '../Layout/layout';
import {Link} from 'react-router-dom';

export default function QrCoupons(props) {
    const[activePage,setActivePage] = useState("Coupon_Properties");
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

                </div>
            </Layout>
        </div>
    )
}
