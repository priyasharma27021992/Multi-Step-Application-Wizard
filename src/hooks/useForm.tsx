import { useState } from 'react';

export const useForm = <T extends object>(initial?: T) => {
	const [formData, setFormData] = useState<T>(initial);

	const handleChange = (name: keyof T, value: string | string[]) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return { formData, setFormData, handleChange };
};
