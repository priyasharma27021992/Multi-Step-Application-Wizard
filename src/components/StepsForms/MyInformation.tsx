import { useState, type ChangeEvent } from 'react';

type JobBoardType = 'JOB_BOARD' | 'COMPANY_SITE' | 'REFERRAL' | 'OTHERS';

const JOB_BOARDS_OPTIONS: Record<JobBoardType, string> = {
	JOB_BOARD: 'Job Board(Linked In, Glassdoor)',
	COMPANY_SITE: 'Company Site',
	REFERRAL: 'Our Employee',
	OTHERS: 'Others',
};
export const MyInformation = ({ data, onSubmit }) => {
	const [formData, setFormData] = useState({
		jobBoard: data?.jobBoard ?? '',
		isExEmployee: data?.isExEmployee ?? '',
		country: data?.country ?? '',
		firstName: data?.firstName ?? '',
		familyName: data?.firstName ?? '',
		addressLine1: data?.addressLine1 ?? '',
		addressLine2: data?.addressLine2 ?? '',
		city: data?.city ?? '',
		state: data?.state ?? '',
		postcode: data?.postcode ?? '',
		phoneDeviceType: data?.phoneDeviceType ?? '',
		countryPhoneCode: data?.countryPhoneCode ?? '',
		phoneNumber: data?.phoneNumber ?? '',
	});

	const handleChange = (name: string, value: string | boolean) => {
		setFormData((prev) => ({
			[name]: value,
		}));
	};

	return (
		<form className='flex flex-col gap-1 items-start justify-between border-1-black padding-2'>
			<label>
				How did you hear about us?
				<select
					value={formData?.jobBoard}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						handleChange('jobBoard', e.target.value)
					}
					required>
					{Object.keys(JOB_BOARDS_OPTIONS).map((jobOption) => (
						<option
							key={jobOption}
							value={jobOption}>
							{JOB_BOARDS_OPTIONS[jobOption]}
						</option>
					))}
				</select>
			</label>
			<fieldset>
				<legend>Have you worked before in the company?</legend>
				<div>
					<input
						type='radio'
						id='isExEmployee'
						value={formData?.isExEmployee}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleChange('isExEmployee', e.target.checked)
						}
					/>
					<label htmlFor='isExEmployee'>Yes</label>
				</div>
			</fieldset>
			<div>
				<label htmlFor='country'>Country</label>
				<select
					value={formData?.country}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						handleChange('country', e.target.value)
					}>
					{['India', 'Sri Lanka', 'Poland', 'USA'].map((countryOption) => (
						<option
							key={countryOption}
							value={countryOption}>
							{countryOption}
						</option>
					))}
				</select>
			</div>
			<hr />
			<div>
				<p>Name</p>
				<div>
					<label>First Name:</label>
					<input
						type='text'
						value={formData?.firstName}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleChange('firstName', e.target.value)
						}
					/>
				</div>
				<div>
					<label>Family Name:</label>
					<input
						type='text'
						value={formData?.familyName}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleChange('lastName', e.target.value)
						}
					/>
				</div>
			</div>
			<hr />
			<div>
				<p>Address</p>
				<div>
					<label htmlFor='addressLine1'>Address Line 1</label>
					<input
						type='text'
						value={formData.addressLine1}
					/>
				</div>
				<div>
					<label htmlFor='addressLine2'>Address Line 2</label>
					<input
						type='textarea'
						value={formData.addressLine2}
					/>
				</div>
				<div>
					<label htmlFor='city'>City</label>
					<input
						type='text'
						value={formData.city}
					/>
				</div>
				<div>
					<label htmlFor='state'>State</label>
					<input
						type='text'
						value={formData.state}
					/>
				</div>
				<div>
					<label htmlFor='postcode'>Postcode</label>
					<input
						type='number'
						value={formData.state}
					/>
				</div>
			</div>
			<hr />
			<div>
				Email
				<p>email</p>
			</div>
			<hr />
			<div>
				<p>Phone</p>
				<div>
					<select value={formData.phoneDeviceType}>
						{['phone', 'tel'].map((opt) => (
							<option value={opt}>{opt}</option>
						))}
					</select>
				</div>
			</div>
			<button onChange={handleChange}>Save and Proceed</button>
		</form>
	);
};
