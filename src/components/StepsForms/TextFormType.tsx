import { useState } from 'react';

interface TextFormTypeProps {
	onSubmit: (obj: object) => void;
	label?: string;
	btnLabel?: string;
	name?: string;
	type?: string;
	className?: string;
}

const TextFormType = ({
	onSubmit,
	label = 'Step Input',
	btnLabel = 'Submit',
	name = 'step-input',
	type = 'text',
	data,
	className = '',
}: TextFormTypeProps) => {
	const [currentInput, setCurrentInput] = useState(data?.[name] ?? '');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit?.({ [name]: currentInput });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentInput(e.target.value);
	};

	return (
		<form
			className={className}
			onSubmit={handleSubmit}>
			<input
				name={name}
				type={type}
				placeholder={label}
				value={currentInput}
				onChange={handleChange}
			/>
			<button type='submit'>{btnLabel}</button>
		</form>
	);
};

export default TextFormType;
