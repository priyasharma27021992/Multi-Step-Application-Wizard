import { useState } from 'react';
import { fetchApi } from '../api/fetchApi';
import { fetchApi2 } from '../api/fetchApi2';
import { STEP } from '../types/common';
import { STEP_BACK_MAP, STEP_TYPE_MAP } from '../utils/utils';
import { StepContext } from '../context/StepContext';

export const StepProvider = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const [stepData, setStepData] = useState({});
	const [currentStep, setCurrentStep] = useState(STEP.STEP1);

	const stepType = STEP_TYPE_MAP[currentStep];

	const onSubmit = async (formData: Record<string, string>) => {
		switch (stepType) {
			case 'TYPE1': {
				const res = await fetchApi(formData);
				console.log('response', res, formData);
				setStepData((prev) => {
					return { ...prev, [currentStep]: { ...formData, res } };
				});
				setCurrentStep('step2');
				break;
			}
			case 'TYPE2': {
				const res = await fetchApi2(formData);
				setStepData((prev) => {
					return { ...prev, [currentStep]: { ...formData, res } };
				});
				break;
			}
			default:
				return;
		}
	};

	const backStep = () => {
		setCurrentStep(STEP_BACK_MAP[currentStep]);
	};

	return (
		<StepContext
			value={{
				stepLevel: currentStep,
				onSubmit,
				stepType,
				backStep,
				stepData,
			}}>
			{children}
		</StepContext>
	);
};
