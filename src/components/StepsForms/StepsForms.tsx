import type { ReactNode } from 'react';
import { useStep } from '../../hooks/useStep';
import StepsProgress from '../StepsProgress';
import StepFormType1 from './TextFormType';
import StepFormType2 from './CheckboxFormType';

const StepsForms = () => {
	const { stepLevel, stepType, onSubmit, backStep, stepData } = useStep();

	const STEP_COMPONENT_MAP: Record<string, ReactNode> = {
		TYPE1: (
			<StepFormType1
				onSubmit={onSubmit}
				data={stepData[stepLevel]}
			/>
		),
		TYPE2: (
			<StepFormType2
				onSubmit={onSubmit}
				data={stepData[stepLevel]}
			/>
		),
	};

	return (
		<div>
			<StepsProgress stepLevel={stepLevel} />
			{STEP_COMPONENT_MAP[stepType]}
			<div>
				{stepLevel !== 'step1' && <button onClick={backStep}>Go Back</button>}
			</div>
		</div>
	);
};

export default StepsForms;
