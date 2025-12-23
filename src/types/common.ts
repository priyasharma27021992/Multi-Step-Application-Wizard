const STEP = {
	STEP1: 'step1',
	STEP2: 'step2',
	STEP3: 'step3',
	STEP4: 'step4'
};

const GENDER_OPTIONS: Record<string, string> = {
	MALE: 'Male',
	FEMALE: 'Female',
	PREFER_NOT_TO_SAY: 'PREFER NOT TO SAY',
};

type GenderType = keyof typeof GENDER_OPTIONS;

export { STEP, GENDER_OPTIONS };
export type { GenderType };
