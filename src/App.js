import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login'
import CreateAccount from './Components/Login/CreateAccount'
import NotFound from './NotFound'
import Cupons from './Components/Compons/cupons'
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
          <Route exact="/cupons" path="/cupons" component={Cupons}/>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;