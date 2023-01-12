import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import Color from './Color';

function App() {
	const [ colorArray, setColor ] = useState([]);

	let myArray = [];
	colorArray.map((color) => {
		myArray.push(color.color);
	});
	// console.log(myArray);

	return (
		<div className="App">
			<BrowserRouter>
				<NavLink to="/colors"> Color List</NavLink>
				<Routes>
					<Route exact path="/colors" element={<ColorList colorArray={colorArray} />} />
					<Route
						exact
						path="/colors/:colorName"
						element={<Color colorArray={colorArray} myArray={myArray} />}
					/>
					<Route exact path="/colors/new" element={<NewColorForm setColor={setColor} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
