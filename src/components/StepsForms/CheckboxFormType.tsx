import { useState } from 'react';

interface CheckboxFormTypeProps {
	onSubmit: (obj: object) => void;
	label?: string;
	btnLabel?: string;
	name?: string;
	type?: string;
	className?: string;
}

const CheckboxFormType = ({
	onSubmit,
	name = 'step-1-checkbox',
	label = 'Step 2 Checkbox',
	btnLabel = 'Submit Step 2',
	className = '',
}: CheckboxFormTypeProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleSubmit = () => {
		onSubmit?.({ [name]: isChecked });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	return (
		<form
			className={className}
			onSubmit={handleSubmit}>
			<label>
				{label}
				<input
					type='checkbox'
					name={name}
					checked={isChecked}
					onChange={handleChange}
				/>
			</label>
			<button type='submit'>{btnLabel}</button>
		</form>
	);
};

export default CheckboxFormType;
