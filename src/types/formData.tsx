import type { GenderType } from './common';

type ProfileFormValues = {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	dob?: string;
	gender?: GenderType;
};

type AddressFormValues = {
	addressLine1?: string;
	addressLine2?: string;
	city?: string;
	state?: string;
	country?: string;
	postalCode?: string;
};

type UserPreferencesValues = {
	experience?: string;
	technologies?: string;
	doj?: string;
};
export type { ProfileFormValues, AddressFormValues, UserPreferencesValues };
