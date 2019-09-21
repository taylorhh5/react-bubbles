import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from './components/routes/PrivateRoute.js'
import Navigation from './components/routes/Navigation.js'
import BubblePage from './components/BubblePage.js'
import Bubbles from './components/Bubbles.js'
import ColorList from './components/ColorList.js'
import {axiosWithAuth} from './components/auth/AxiosWithAuth.js';
import "./styles.scss";


function App() {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
		axiosWithAuth()
			.get('http://localhost:5000/api/colors')
			.then((res) => {
				console.log(res, 'response from colors');
				setColorList(res.data);
			})
			.catch((err) => console.log(err));
	}, []);


  return (
    <Router>
      <div className="App">
      <Navigation />
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
           <Route exact path="/colorlist" component={ColorList}/>
           <Route
        path="/colorlist"
        render={props => (
          <ColorList {...props} colorlist={colorList} updateItems={setColorList}/>
          )}
          />

        <PrivateRoute exact path="/bubblepage" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
