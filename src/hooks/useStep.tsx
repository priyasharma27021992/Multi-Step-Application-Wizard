import { useContext } from 'react';
import { StepContext } from '../context/StepContext';

export const useStep = () => {
	const context = useContext(StepContext);
	return context;
};
