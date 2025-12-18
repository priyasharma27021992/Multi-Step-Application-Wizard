import type { ReactNode } from 'react';
import { useStep } from '../../hooks/useStep';
import StepsProgress from '../StepsProgress';
import ProfileFormType from './ProfileFormType';
import AddressFormType from './AddressFormType';
import { STEP_TYPE_MAP } from '../../utils/utils';

const StepsForms = () => {
	const { stepLevel, onSubmit, backStep, stepData } = useStep();

	const stepType = STEP_TYPE_MAP[stepLevel];

	const STEP_COMPONENT_MAP: Record<string, ReactNode> = {
		TYPE1: (
			<ProfileFormType
				onSubmit={onSubmit}
				data={stepData[stepLevel]}
			/>
		),
		TYPE2: (
			<AddressFormType
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
