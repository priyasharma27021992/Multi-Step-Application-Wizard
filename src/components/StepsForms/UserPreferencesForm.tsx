import { useState, type ChangeEvent, type FormEvent } from 'react';
import { formatDate } from '../../utils/commonFunctions';
import classNames from 'classnames';
import { useForm } from '../../hooks/useForm';

const TECH_OPTIONS = [
	'javascript',
	'html5',
	'css3',
	'typescript',
	'web',
	'nodejs',
	'tailwind',
	'docker',
	'datastructures',
];
const UserPreferencesForm = ({ data, onSubmit, className }) => {
	const { formData, handleChange } = useForm(data);
	// const handleChange = (
	// 	name: string,
	// 	e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	// ) => {
	// 	const value =
	// 		e.target.type === 'select-multiple'
	// 			? [...e.target.selectedOptions]?.map((opt) => opt.value)
	// 			: e.target.value;
	// 	setFormData((prev) => ({
	// 		...prev,
	// 		[name]: value,
	// 	}));
	// };

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	console.log('formData baby', formData);

	return (
		<form
			onSubmit={handleSubmit}
			className={classNames('flex flex-row gap-1', className)}>
			<label htmlFor='experience'>
				React Experience in Number of Years
				<input
					id='experience'
					placeholder='5'
					type='number'
					value={formData.experience}
					onChange={(e) => handleChange('experience', e)}
				/>
			</label>
			<label htmlFor='technologies'>
				Technologies:
				<select
					id='technologies'
					value={formData.technologies}
					onChange={(e) => handleChange('technologies', e)}
					multiple>
					{TECH_OPTIONS.map((opt) => (
						<option value={opt}>{opt}</option>
					))}
				</select>
			</label>
			<label htmlFor='DOJ'>Date of Joining</label>
			<input
				id='doj'
				type='date'
				min={formatDate()}
				value={formData.doj}
				onChange={(e) => handleChange('doj', e)}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default UserPreferencesForm;
