import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Detail from "./components/Detail";
import App from './App';
import reportWebVitals from './reportWebVitals';


const Root = () => (
	
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/detail/:id" component={Detail} />
		</Switch>
	
);


ReactDOM.render(
  <React.StrictMode>
    <Router>
	       		<Root/>
	       </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
