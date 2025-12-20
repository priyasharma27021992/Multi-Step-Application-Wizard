import { useState, type ChangeEvent } from 'react';
import { formatDate } from '../../utils/commonFunctions';

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
const UserPreferencesForm = ({ data }) => {
	const [formData, setFormData] = useState({
		experience: data?.experience ?? 0,
		technologies: data?.technologies ?? [],
		doj: data?.doj ?? '',
	});
	const handleChange = (
		name: string,
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		const value =
			e.target.type === 'select-multiple'
				? [...e.target.selectedOptions]?.map((opt) => opt.value)
				: e.target.value;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	console.log('formData baby', formData);

	return (
		<form>
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
			<label htmlFor='technologies'></label>
			<select
				id='technologies'
				value={formData.technologies}
				onChange={(e) => handleChange('technologies', e)}
				multiple>
				{TECH_OPTIONS.map((opt) => (
					<option value={opt}>{opt}</option>
				))}
			</select>
			<label htmlFor='DOJ'>Date of Joining</label>
			<input
				id='doj'
				type='date'
				min={formatDate()}
				value={formData.doj}
				onChange={(e) => handleChange('doj', e)}
			/>
		</form>
	);
};

export default UserPreferencesForm;
