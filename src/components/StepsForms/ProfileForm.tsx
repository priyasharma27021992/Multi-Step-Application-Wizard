import { useState } from 'react';
import classnames from 'classnames';

const GENDER_OPTIONS: Record<string, string> = {
	MALE: 'Male',
	FEMALE: 'Female',
	PREFER_NOT_TO_SAY: 'PREFER NOT TO SAY',
};

type GenderType = keyof typeof GENDER_OPTIONS;

interface ProfileFormProps {
	onSubmit: (obj: object) => void;
	data?: {
		firstName?: string;
		lastName?: string;
		email?: string;
		phone?: string;
		dob?: string;
		gender?: GenderType;
	};
	className?: string;
}

const ProfileForm = ({ onSubmit, data, className = '' }: ProfileFormProps) => {
	const [formData, setFormData] = useState({
		firstName: data?.firstName ?? '',
		lastName: data?.lastName ?? '',
		email: data?.email ?? '',
		phone: data?.phone ?? '',
		dob: data?.dob ?? '',
		gender: data?.gender ?? '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	const handleChange = (
		name: string,
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData((prev) => ({ ...prev, [name]: e.target.value }));
	};

	return (
		<form
			className={classnames('flex flex-row gap-1', className)}
			onSubmit={handleSubmit}>
			<input
				placeholder='FirstName'
				required
				onChange={(e) => handleChange('firstName', e)}
				value={formData.firstName}
			/>
			<input
				placeholder='LastName'
				onChange={(e) => handleChange('lastName', e)}
				value={formData.lastName}
			/>
			<input
				placeholder='Email'
				required
				type='email'
				onChange={(e) => handleChange('email', e)}
				value={formData.email}
			/>
			<input
				placeholder='Phone'
				type='tel'
				// pattern='[+][0-9]{2}-[0-9]{10}'
				onChange={(e) => handleChange('phone', e)}
				value={formData.phone}
			/>
			<input
				placeholder='DOB'
				type='date'
				min='1970-01-01'
				max='2003-01-01'
				onChange={(e) => handleChange('dob', e)}
				value={formData.dob}
			/>
			<select
				value={formData.gender}
				onChange={(e) => handleChange('gender', e)}>
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
