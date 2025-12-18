import { STEP } from "../types/common";
import { STEP_BACK_MAP, STEP_NEXT_MAP } from "../utils/utils";
import type { Action } from "./stepAction";

const initialState ={
    stepLevel: STEP.STEP1,
    stepsData : {}
}

export const stepReducer = (state = initialState, action: Action) => {
    switch(action.type){
        case 'add_step' : {
            return {
                ...state,
                stepsData : {
                    ...state.stepsData,
                    [state.stepLevel] : action.payload
                },
                stepLevel: STEP_NEXT_MAP[state.stepLevel]
            }
        }
        case 'next_step': {
            return {
                ...state,
                stepLevel: STEP_NEXT_MAP[state.stepLevel] 
                };       
        }
        case 'previous_step': {
            return {
                ...state,
                stepLevel: STEP_BACK_MAP[state.stepLevel]
                };       
        }
    }
}