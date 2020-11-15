import React,{useState,useEffect} from 'react'
import {Layout} from '../../Components/Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import ArrowRightPNG from '../../Components/Assets/icons/arrow_right.png';
import LightRightPNG from '../../Components/Assets/icons/light_right_arrow.png';
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'
import axios from 'axios'

const DashboardOverview = () => {
    useEffect(() => {
        Overview()
    }, [])

    const [isEmpty,setEmpty] = useState(false);
    
    const [overviewData,setoverviewData] = useState([])
    const [getAllCouponType,setgetAllCouponType] = useState([])
    const [getAllcategory,setgetAllcategory] = useState([])
    const  Overview =async()=>{

        try {
          showLoader()
            const res1 = await httpGet(`admin/overview/`)
            const res2 = await httpGet(`couponType/getAll/`)
            const res3 = await httpGet(`admin/categories/`)
              const all = await axios.all([res1, res2, res3])
              console.log(all[2])
            if (all[0].status === 200 || all[0].status === 201) {
                setoverviewData(all[0].data.data.overviewResult)
            }
            if (all[1].status === 200 || all[1].status === 201) {

                setgetAllCouponType(all[1].data.data.couponType)
                
            }

            

            if (all[2].status === 200 || all[2].status === 201) {

                setgetAllcategory(all[2].data.data.categories)
                console.log("cate>>>>",all[2].data.data.categories)
                
            }

            hideLoader()
        } catch (error) {
          hideLoader()
        }
    }
    
    
    return (
        <div>
            <Layout pageName="Overview">
                <section className="page-section">
                    <div className="row">
                        <div className="col-md-2">
                            <DatePicker />
                            <div className="custom-input-group-prepend">
                                <i className="fa fa-calendar"></i>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <DatePicker />
                            <div className="custom-input-group-prepend">
                                <i className="fa fa-calendar"></i>
                            </div>
                        </div>
                        {/* <div className="col-md-8">
                            <button className="btn btn-primary pull-right">Export <i className="fa fa-download"></i></button>
                        </div> */}
                    </div>
                </section>

                <section className="page-section">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <h5 className="bold-550">
                                    Top Merchants
                                    <Link to="/dashboard/users" className="view-more-link text-primary pull-right"> 
                                        <span className="mr-1">View</span> 
                                        <i className="fa fa-angle-right"></i>
                                        <i className="fa fa-angle-right"></i>
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </h5>
                                <div className="">
                                    <table id="dtBasicExample" class="table table-responsive table-striped table-no-bordered" cellspacing="0" width="100%">
                                        <thead className="mb-20">
                                            <tr>
                                                <th className="th-sm" style={{width:'10%'}}>NO
                                                </th>
                                                <th className="th-sm" style={{width:'25%'}}>MERCHANTS
                                                </th>
                                                <th className="th-sm" style={{width:'35%'}}>
                                                    CLAIMED COUPONS
                                                </th>
                                                <th className="th-sm" style={{width:'25%'}}>
                                                    TOTAL
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                [...'123456'].map(()=>(
                                                    <tr>
                                                        <td>
                                                            1
                                                        </td>
                                                        <td>
                                                           Jumia
                                                        </td>
                                                        <td>
                                                            295
                                                        </td>
                                                        <td className="text-center">
                                                            198 <span className="fa fa-arrow-up text-success"></span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <h6 className="text-muted bold-550">Total Users</h6>
                                        <h1 className="bold-550">{overviewData.totalUsers}</h1>
                                        <Link to="/dashboard/users" className="view-more-link text-primary text-right"> 
                                            <span className="mr-1">View</span> 
                                            <i className="fa fa-angle-right"></i>
                                           <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <h6 className="text-muted bold-550">Total Merchants</h6>
                                        <h1 className="bold-550">{overviewData.totalMerchants}</h1>
                                        <Link to="/dashboard/users" className="view-more-link text-primary text-right"> 
                                            <span className="mr-1">View</span> 
                                            <i className="fa fa-angle-right"></i>
                                            <i className="fa fa-angle-right"></i>
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mt-3">
                                        <h6 className="text-muted bold-550">Total Coupons</h6>
                                        <h1 className="bold-550">{overviewData.totalCoupons}</h1>
                                        <Link to="/dashboard/users" className="view-more-link text-primary text-right"> 
                                            <span className="mr-1">View</span> 
                                            <i className="fa fa-angle-right"></i>
                                            <i className="fa fa-angle-right"></i>
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card mt-3">
                                        <h5 className="text-muted bold-550">Top Claimed Categories</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page-section">
                    <h3 className="bold-550 mb-3">Categories</h3>
                    <div className="row">
                        {
                            [...getAllcategory].map(value=>(
                                <div class="col-md-2 mb-3">
                                    <div className="card item-card">
                                        <h5 className="bold-550">{value.category}</h5>
                                              <p>{value.description}</p>
                                        <Link to="/dashboard/users" className="view-more-link text-primary text-right"> 
                                            <div className="icon-image-container-no-margin text-right">
                                                <img src={ArrowRightPNG}/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        <div class="col-md-2 mb-3">
                                    <div className="card item-card bg-primary">
                                        <h5 className="bold-550">Add new Category</h5>
                                        <p>Create a new category of coupons</p>
                                        <Link to="/create-category" className="view-more-link text-primary text-right"> 
                                            <div className="icon-image-container-no-margin text-right">
                                                <img src={LightRightPNG}/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                    </div>

                </section>

                <section className="page-section">
                    <h3 className="bold-550 mb-3">Coupon Type</h3>
                    <div className="row">
                        {
                            [...getAllCouponType].map(value=>(
                                <div class="col-md-2 mb-3">
                                    <div className="card item-card">
                                      <h5 className="bold-550">{value.couponType}</h5>
                                         <p>{value.description}</p>
                                        <Link to="/dashboard/users" className="view-more-link text-primary text-right"> 
                                            <div className="icon-image-container-no-margin text-right">
                                                <img src={ArrowRightPNG}/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        <div class="col-md-2 mb-3">
                                    <div className="card item-card bg-primary">
                                        <h5 className="bold-550">Add new coupon type</h5>
                                        <p>Create a new category of coupons</p>
                                        <Link to="/create-coupon-type" className="view-more-link text-primary text-right"> 
                                            <div className="icon-image-container-no-margin text-right">
                                                <img src={LightRightPNG}/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                    </div>

                </section>
               

           
        </Layout>
    </div>
    )
}
export default DashboardOverview;


