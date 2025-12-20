import { createContext } from 'react';
import { STEP } from '../types/common';

interface StepContextType {
	stepLevel: (typeof STEP)[keyof typeof STEP];
	onSubmit: (_formData: Record<string, string>) => void;
	backStep: () => void;
	stepData: Record<string, object>;
}

export const StepContext = createContext<StepContextType>({
	stepLevel: STEP.STEP1,
	onSubmit: () => {},
	backStep: () => {},
	stepData: {},
});
