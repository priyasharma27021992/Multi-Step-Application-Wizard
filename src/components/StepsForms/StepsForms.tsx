import type { ReactNode } from 'react';
import { useStep } from '../../hooks/useStep';
import StepsProgress from '../StepsProgress';
import ProfileForm from './ProfileForm';
import AddressForm from './AddressForm';
import { STEP_TYPE_MAP } from '../../utils/utils';
import UserPreferencesForm from './UserPreferencesForm';

const StepsForms = () => {
	const { stepLevel, onSubmit, backStep, stepData } = useStep();

	const stepType = STEP_TYPE_MAP[stepLevel];

	const STEP_COMPONENT_MAP: Record<string, ReactNode> = {
		TYPE1: (
			<ProfileForm
				onSubmit={onSubmit}
				data={stepData[stepLevel]}
			/>
		),
		TYPE2: (
			<AddressForm
				onSubmit={onSubmit}
				data={stepData[stepLevel]}
			/>
		),
		TYPE3: (
			<UserPreferencesForm
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
