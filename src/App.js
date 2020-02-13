import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login'
import CreateAccount from './Components/Login/CreateAccount'
import NotFound from './NotFound'
import CreateCupons from './Components/Compons/create-cupon'
import Cupons from './Components/Compons/cupons'
import Reviews from './Components/Reviews/reviews'
import QrCoupons from './Components/qrCoupons/qrcoupons'
import Admin from './Components/Admins/admins'
import Dashboard from './Components/Dashboard/dashboard'
import User from './Components/Dashboard/user'
import Merchants from './Components/Dashboard/merchants'
import "./App.css";
class App extends Component {
	render() {
		return (
			<Router>
				{/* <NotificationContainer /> */}
				<Switch>
					<Route exact="/" path="/" component={Login}/>
          <Route exact="/login" path="/login" component={Login}/>
          <Route exact="/create_account" path="/create_account" component={CreateAccount}/>
          <Route exact="/create_cupons" path="/create_cupons" component={CreateCupons}/>
		  <Route exact="/cupons" path="/cupons" component={Cupons}/>
		  <Route exact="/reviews" path="/reviews" component={Reviews}/>
		  <Route exact="/qrcoupons" path="/qrcoupons" component={QrCoupons} />
		  <Route exact="/admin" path="/admin" component={Admin} />
		  <Route exact="/dashboard" path="/dashboard" component={Dashboard}/>
		  <Route exact="/user" path="/user" component={User}/>
		  <Route exact="/merchants" path="/merchants" component={Merchants}/>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;