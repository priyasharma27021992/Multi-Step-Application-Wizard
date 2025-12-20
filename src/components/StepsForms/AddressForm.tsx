import { useState } from 'react';

interface AddressFormProps {
	onSubmit: (obj: object) => void;
	data?: {
		addressLine1?: string;
		addressLine2?: string;
		city?: string;
		state?: string;
		country?: string;
		postalCode?: string;
	};
	className?: string;
}

const AddressForm = ({ onSubmit, data, className = '' }: AddressFormProps) => {
	const [formData, setFormData] = useState({
		addressLine1: data?.addressLine1 ?? '',
		addressLine2: data?.addressLine2 ?? '',
		city: data?.city ?? '',
		state: data?.state ?? '',
		country: data?.country ?? '',
		postalCode: data?.postalCode ?? '',
	});

	const handleSubmit = (e: FormDataEvent) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	const handleChange = (
		name: string,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setFormData((prev) => ({ ...prev, [name]: e.target.value }));
	};

	return (
		<form
			className={className}
			onSubmit={handleSubmit}>
			<input
				name='addressLine1'
				placeholder='Address Line 1'
				required
				onChange={(e) => handleChange('addressLine1', e)}
				value={formData.addressLine1}
			/>
			<input
				name='addressLine2'
				placeholder='Address Line 2'
				required
				onChange={(e) => handleChange('addressLine2', e)}
				value={formData.addressLine2}
			/>
			<input
				name='city'
				placeholder='City'
				onChange={(e) => handleChange('city', e)}
				value={formData.city}
			/>
			<input
				name='state'
				placeholder='State'
				onChange={(e) => handleChange('state', e)}
				value={formData.state}
			/>
			<input
				name='country'
				placeholder='Country'
				required
				onChange={(e) => handleChange('country', e)}
				value={formData.country}
			/>
			<input
				name='postalCode'
				placeholder='Postal Code'
				required
				onChange={(e) => handleChange('postalCode', e)}
				value={formData.postalCode}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AddressForm;
