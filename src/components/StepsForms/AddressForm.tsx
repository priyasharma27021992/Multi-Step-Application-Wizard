import classNames from 'classnames';
import { useForm } from '../../hooks/useForm';
import type { AddressFormValues } from '../../types/formData';
import type { FormEvent } from 'react';

interface AddressFormProps {
	onSubmit: (obj: object) => void;
	data?: AddressFormValues;
	className?: string;
}

const AddressForm = ({ onSubmit, data, className = '' }: AddressFormProps) => {
	const { formData, handleChange } = useForm<AddressFormValues>(data);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	return (
		<form
			className={classNames('flex flex-row gap-1', className)}
			onSubmit={handleSubmit}>
			<input
				name='addressLine1'
				placeholder='Address Line 1'
				required
				onChange={(e) => handleChange('addressLine1', e.target.value)}
				value={formData.addressLine1}
			/>
			<input
				name='addressLine2'
				placeholder='Address Line 2'
				required
				onChange={(e) => handleChange('addressLine2', e.target.value)}
				value={formData.addressLine2}
			/>
			<input
				name='city'
				placeholder='City'
				onChange={(e) => handleChange('city', e.target.value)}
				value={formData.city}
			/>
			<input
				name='state'
				placeholder='State'
				onChange={(e) => handleChange('state', e.target.value)}
				value={formData.state}
			/>
			<input
				name='country'
				placeholder='Country'
				required
				onChange={(e) => handleChange('country', e.target.value)}
				value={formData.country}
			/>
			<input
				name='postalCode'
				placeholder='Postal Code'
				required
				onChange={(e) => handleChange('postalCode', e.target.value)}
				value={formData.postalCode}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AddressForm;
