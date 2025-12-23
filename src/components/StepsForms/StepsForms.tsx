import type { ReactNode } from 'react';
import { useStep } from '../../hooks/useStep';
import AddressForm from './AddressForm';
import { STEP_TYPE_MAP } from '../../utils/utils';
import UserPreferencesForm from './UserPreferencesForm';
import { SummaryForm } from './SummaryForm';
import Progress from '../Progress/Progress';
import { MyInformation } from './MyInformation';

const StepsForms = () => {
	const { stepLevel, onSubmit, backStep, stepData } = useStep();

	const stepType = STEP_TYPE_MAP[stepLevel];

	const STEP_COMPONENT_MAP: Record<string, ReactNode> = {
		TYPE1: (
			<MyInformation
				onSubmit={onSubmit}
				data={stepData[stepLevel]}
			/>
		),
		TYPE4: <SummaryForm data={stepData} />,
	};

	return (
		<div>
			<Progress />
			{STEP_COMPONENT_MAP[stepType]}
			<div>
				{stepLevel !== 'step1' && <button onClick={backStep}>Go Back</button>}
			</div>
		</div>
	);
};

export default StepsForms;
