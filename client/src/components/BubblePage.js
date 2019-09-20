import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from './auth/AxiosWithAuth.js';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
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
    <>
    <h1>Bubble Page</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
