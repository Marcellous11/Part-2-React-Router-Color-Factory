import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const Color = ({ myArray }) => {
	const navigate = useNavigate();
	const { colorName } = useParams();

	useEffect(() => {
		console.log(colorName);
		console.log(myArray);

		if (!myArray.includes(colorName)) {
			console.log('redirect');
			navigate('/colors');
		}
	});

	return (
		<div style={{ backgroundColor: `${colorName}` }}>
			<h2>color name </h2>

			<NavLink to="/colors">
				<button>Back</button>{' '}
			</NavLink>
		</div>
	);
};
export default Color;
