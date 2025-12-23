import classnames from 'classnames';
import { useForm } from '../../hooks/useForm';
import type { ProfileFormValues } from '../../types/formData';
import { GENDER_OPTIONS } from '../../types/common';

interface ProfileFormProps {
	onSubmit: (obj: object) => void;
	data?: ProfileFormValues;
	className?: string;
}

const ProfileForm = ({ onSubmit, data, className = '' }: ProfileFormProps) => {
	const { formData, handleChange } = useForm<ProfileFormValues>(data);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	return (
		<form
			className={classnames('flex flex-row gap-1', className)}
			onSubmit={handleSubmit}>
			<input
				placeholder='FirstName'
				required
				onChange={(e) => handleChange('firstName', e.target.value)}
				value={formData.firstName}
			/>
			<input
				placeholder='LastName'
				onChange={(e) => handleChange('lastName', e.target.value)}
				value={formData.lastName}
			/>
			<input
				placeholder='Email'
				required
				type='email'
				onChange={(e) => handleChange('email', e.target.value)}
				value={formData.email}
			/>
			<input
				placeholder='Phone'
				type='tel'
				// pattern='[+][0-9]{2}-[0-9]{10}'
				onChange={(e) => handleChange('phone', e.target.value)}
				value={formData.phone}
			/>
			<input
				placeholder='DOB'
				type='date'
				min='1970-01-01'
				max='2003-01-01'
				onChange={(e) => handleChange('dob', e.target.value)}
				value={formData.dob}
			/>
			<select
				value={formData.gender}
				onChange={(e) => handleChange('gender', e.target.value)}>
				{Object.keys(GENDER_OPTIONS).map((opt) => (
					<option
						key={opt}
						value={opt}>
						{GENDER_OPTIONS[opt]}
					</option>
				))}
			</select>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default ProfileForm;
