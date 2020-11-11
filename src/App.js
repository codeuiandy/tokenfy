import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login'
import CreateAccount from './Components/Login/CreateAccount'
import NotFound from './NotFound'
import CreateCupons from './Components/Compons/create-cupon'
import Cupons from './Components/Compons/cupons'
import Reviews from './Components/Reviews/reviews'
import ViewCupon from './Components/Compons/viewCupon'
import EditCupon from './Components/Compons/editCupon'
import DashbordUsers from './Components/Dashboard/Users'
import Dashbordmerchants from './Components/Dashboard/merchants'
import MerchantOverview from './Components/Dashboard/merchantOverview'
import UsersOverview from './Components/Dashboard/usersOverview'
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
		  <Route exact="/view_cupon" path="/view_cupon" component={ViewCupon}/>
		  <Route exact="/edit_cupon" path="/edit_cupon" component={EditCupon}/>
		  <Route exact="/dashboard/users" path="/dashboard/users" component={DashbordUsers}/>
		  <Route exact="/dashboard/merchants" path="/dashboard/merchants" component={Dashbordmerchants}/>
		  <Route exact="/merchants_overview" path="/merchants_overview" component={MerchantOverview}/>
		  <Route exact="/users_overview" path="/users_overview" component={UsersOverview}/>

		  
		 
		  
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;