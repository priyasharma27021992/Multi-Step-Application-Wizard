import { createContext } from 'react';
import { STEP } from '../types/common';

export const StepContext = createContext({
	stepLevel: STEP.STEP1,
	onSubmit: () => Promise<void>,
	stepType: 'TYPE1',
	backStep: () => {},
});
