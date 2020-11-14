import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login/Login'
import CreateAccount from './Pages/Login/CreateAccount'
import NotFound from './NotFound'
import CreateCupons from './Pages/Compons/create-cupon'
import Cupons from './Pages/Compons/cupons'
import Reviews from './Pages/Reviews/reviews'
import ViewCupon from './Pages/Compons/viewCupon'
import EditCupon from './Pages/Compons/editCupon'
import DashbordUsers from './Pages/Dashboard/Users'
import Dashbordmerchants from './Pages/Dashboard/merchants'
import MerchantOverview from './Pages/Dashboard/merchantOverview'
import UsersOverview from './Pages/Dashboard/usersOverview'
import AdminTasks from './Pages/Admins/admin-tasks';
import CreateTask from './Pages/Admins/create-task';
import AdminList from './Pages/Admins/admin-list';
import CreateAdmin from './Pages/Admins/create-admin';
import AccountSettings from './Pages/Settings/settings';
import DashboardOverview from './Pages/Dashboard/overview';
import QrCoupons from './Pages/QRCoupon/QrCoupons';
import CreateQrCoupons from './Pages/QRCoupon/createQrCoupon';
import CreateQrCouponsTwo from './Pages/QRCoupon/createCoupon_two';
import "./App.css";
import TrashList from "./Pages/Trash/trash";
import ReviewTable from './Pages/Reviews/ReviewTable'
import Wallet from './Pages/Dashboard/wallet';
import UserDetails from "./Pages/Dashboard/user_details";
import AddReward from "./Pages/Dashboard/add-reward";
import CouponType from "./Pages/Dashboard/coupon_type";
import CreateCategory from "./Pages/Dashboard/create_category";
class App extends Component {
	render() {
		return (
			<Router>
				{/* <NotificationContainer /> */}
				<Switch>
					<Route exact="/" path="/" component={Login}/>
					<Route exact="/login" path="/login" component={Login}/>
					<Route exact="/create_account" path="/create_account" component={CreateAccount}/>
					<Route exact="/create_coupons" path="/create_coupons" component={CreateCupons}/>
					<Route exact="/coupons" path="/coupons" component={Cupons}/>
					<Route exact="/reviews" path="/reviews" component={Reviews}/>
					<Route exact="/all_reviews" path="/all_reviews" component={ReviewTable} />
					<Route exact="/view_coupon" path="/view_coupon" component={ViewCupon}/>
					<Route exact="/edit_coupon" path="/edit_coupon" component={EditCupon}/>
					<Route exact="/dashboard/users" path="/dashboard/users" component={DashbordUsers}/>
					<Route exact="/dashboard/add_merchants" path="/dashboard/add_merchants" component={Dashbordmerchants}/>
					<Route exact="/merchants_overview" path="/merchants_overview" component={MerchantOverview}/>
					<Route exact="/merchants/users_overview" path="/merchants/users_overview" component={UsersOverview}/>
					<Route exact="/admin-tasks" path="/admin-tasks" component={AdminTasks} />
					<Route exact="/admin-task" path="/create-task" component={CreateTask} />
					<Route exact="/admin-list" path="/admin-list" component={AdminList} />
					<Route exact="/create-admin" path="/create-admin" component={CreateAdmin} />
					<Route exact="/account-settings" path="/account-settings" component={AccountSettings} />
					<Route exact="/trash-list" path="/trash-list" component={TrashList} />
					<Route exact="/dashbord-overview" path="/dashboard-overview" component={DashboardOverview} />
					<Route exact="/qr_coupons" path="/qr_coupons" component={QrCoupons} />
					<Route exact="/create_qr_coupon" path="/create_qr_coupon" component={CreateQrCoupons} />
					<Route exact="/create_qr_coupon_two" path="/create_qr_coupon_two" component={CreateQrCouponsTwo} />
					<Route exact="/wallet" path="/wallet" component={Wallet} />
					<Route exact="/user-details" path="/user-details" component={UserDetails} />
					<Route exact="/add-reward" path="/add-reward" component={AddReward} />
					<Route exact="/create-coupon-type" path="/create-coupon-type" component={CouponType} />
					<Route exact="/create-category" path="/create-category" component={CreateCategory} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;