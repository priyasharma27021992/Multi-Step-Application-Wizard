import { useReducer } from 'react';
import { STEP } from '../types/common';
import { StepContext } from '../context/StepContext';
import { stepReducer } from '../reducers/stepReducer';
import { fetchApi } from '../api/fetchApi';

export const StepProvider = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const [state, dispatch] = useReducer(stepReducer, {
		stepLevel: STEP.STEP1,
		stepsData: {},
	});

	const onSubmit = async (formData: Record<string, string>) => {
		try {
			const response = await fetchApi({
				...formData,
				stepLeve: state.stepLevel,
			});
			console.log('response', response.data);
			// dispatch({
			// 	type: 'add_step',
			// 	payload: response,
			// });
		} catch (error) {
			console.error(error);
		}
	};

	const backStep = () => {
		dispatch({
			type: 'previous_step',
		});
	};

	return (
		<StepContext
			value={{
				stepLevel: state.stepLevel,
				onSubmit,
				backStep,
				stepData: state.stepsData,
			}}>
			{children}
		</StepContext>
	);
};
