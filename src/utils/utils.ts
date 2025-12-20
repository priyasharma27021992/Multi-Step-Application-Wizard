import { STEP } from "../types/common";

export const STEP_TYPE_MAP = {
    [STEP.STEP1]: 'TYPE1',
    [STEP.STEP2]: 'TYPE2',
    [STEP.STEP3]: 'TYPE3',
    [STEP.STEP4]: 'TYPE4',
}

export const STEP_BACK_MAP = {
    [STEP.STEP2]: STEP.STEP1,
    [STEP.STEP3]: STEP.STEP2,
    [STEP.STEP4]: STEP.STEP3,
}


export const STEP_NEXT_MAP = {
    [STEP.STEP1]: STEP.STEP2,
    [STEP.STEP2]: STEP.STEP3,
    [STEP.STEP3]: STEP.STEP4,
}