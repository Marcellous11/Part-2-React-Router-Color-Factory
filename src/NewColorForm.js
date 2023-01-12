import React, { useState } from 'react';
import { redirect, Navigate, useNavigate } from 'react-router-dom';

const NewColorForm = ({ setColor }) => {
	const INITAL_FORM = { color: '' };
	const navigate = useNavigate();
	const [ formData, setFormData ] = useState(INITAL_FORM);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setColor((data) => [ ...data, formData ]);
		navigate('/colors');
		setFormData();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" name="color" placeholder="color" value={formData.color} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default NewColorForm;
