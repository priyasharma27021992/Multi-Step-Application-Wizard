import { useMemo, useState } from 'react';

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

function shouldShowField(field, values) {
	const { dependsOn, showIf } = field;

	if (!dependsOn) return true;

	if (typeof showIf === 'function') return !!showIf(values);

	if (typeof dependsOn === 'string') {
		if (showIf === undefined) return !!values[dependsOn];
		return values[dependsOn] === showIf;
	}

	if (Array.isArray(dependsOn)) {
		if (typeof showIf === 'string')
			return dependsOn.some((dep) => values[dep] === showIf);
	}
}

const DynamicForm = ({ config }) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});

	const visibleFields = useMemo(() => {
		return config.filter((f) => shouldShowField(f, values));
	}, [config, values]);

	const handleSubmit = () => {};

	return <form onSubmit={handleSubmit}></form>;
};

export { DynamicForm };
