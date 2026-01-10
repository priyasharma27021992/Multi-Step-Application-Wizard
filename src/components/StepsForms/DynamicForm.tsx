import { useState } from 'react';

const formConfig = [
	{
		name: 'country',
		label: 'Country',
		type: 'select',
		options: [
			{ label: 'India', value: 'india' },
			{ label: 'USA', value: 'usa' },
			{ label: 'Other', value: 'other' },
		],
		validation: { required: true },
	},
	{
		name: 'customCountry',
		label: 'Enter Country Name',
		type: 'text',
		dependsOn: 'country',
		showIf: 'other',
	},
	{
		name: 'state',
		label: 'State (India)',
		type: 'select',
		dependsOn: 'country',
		showIf: 'india',
		options: [
			{ label: 'Maharashtra', value: 'maharashtra' },
			{ label: 'Rajasthan', value: 'rajasthan' },
			{ label: 'Gujarat', value: 'gujarat' },
		],
	},
	{
		name: 'usaState',
		label: 'State (USA)',
		type: 'select',
		dependsOn: 'country',
		showIf: 'usa',
		options: [
			{ label: 'California', value: 'california' },
			{ label: 'Texas', value: 'texas' },
			{ label: 'Florida', value: 'florida' },
		],
	},
	{
		name: 'postalCode',
		label: 'Postal Code',
		type: 'text',
		dependsOn: ['state', 'usaState'],
		showIf: (values) => values.state || values.usaState,
		validation: {
			required: true,
			pattern: /^[0-9]{4,8}$/,
			message: 'Postal code must be 4–8 digits',
		},
	},
];

//type: select, text,
//usaState depends on country
//postalCode depends on state and usaState
//state depends on country

const DynamicForm = () => {
	const [formData, setFormData] = useState({
		country: '',
		customCountry: '',
		state: '',
		usaState: '',
		postalCode: '',
	});

	const handleChange = (name, value) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const getFormFields = (field) => {
		if (field.type === 'select') {
			return (
				<select onChange={(e) => handleChange(field.name, e.target.value)}>
					{field.options.map((option) => (
						<option value={option.name}>{option.label}</option>
					))}
				</select>
			);
		}
		if (field.type === 'text') {
			return (
				<input
					value={formData[field.name]}
					onChange={(e) => handleChange(field.name, e.target.value)}
				/>
			);
		}
	};

	return (
		<form>
			{formConfig?.map((field) => {
				return getFormFields(field);
			})}
		</form>
	);
};

export { DynamicForm };
