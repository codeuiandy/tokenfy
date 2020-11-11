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
import AdminTasks from './Pages/Admins/admin-tasks';
import CreateTask from './Pages/Admins/create-task';
import AdminList from './Pages/Admins/admin-list';
import CreateAdmin from './Pages/Admins/create-admin';
import AccountSettings from './Pages/Settings/settings';
import DashboardOverview from './Pages/Dashboard/overview';
import "./App.css";
import TrashList from "./Pages/Trash/trash";
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
					<Route exact="/admin-tasks" path="/admin-tasks" component={AdminTasks} />
					<Route exact="/admin-task" path="/create-task" component={CreateTask} />
					<Route exact="/admin-list" path="/admin-list" component={AdminList} />
					<Route exact="/create-admin" path="/create-admin" component={CreateAdmin} />
					<Route exact="/account-settings" path="/account-settings" component={AccountSettings} />
					<Route exact="/trash-list" path="/trash-list" component={TrashList} />
					<Route exact="/dashbord-overview" path="/dashboard-overview" component={DashboardOverview} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;