import React, { useState } from 'react';
import { useParams, NavLink, BrowserRouter, Route, Routes } from 'react-router-dom';
import Color from './Color';

import { v4 as uuid } from 'uuid';

const ColorList = ({ colorArray }) => {
	return (
		<div>
			<header>
				<h2>Welcome to the color factory </h2>
				<NavLink key={uuid()} to="/colors/new">
					Add new color here
				</NavLink>
			</header>
			<div>
				<ul>
					{colorArray.map((color) => {
						if (color.color === '') {
							return null;
						}
						return (
							<NavLink key={uuid()} to={`/colors/${color.color}`}>
								<li>{color.color}</li>
							</NavLink>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
export default ColorList;
