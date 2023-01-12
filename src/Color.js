import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
const Color = () => {
	const { colorName } = useParams();
	return (
		<div style={{ backgroundColor: `${colorName}` }}>
			<h2>color name </h2>

			<NavLink to="/colors">
				{' '}
				<button>Back</button>{' '}
			</NavLink>
		</div>
	);
};
export default Color;
