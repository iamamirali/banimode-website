    export interface PhoneResponseRootObject {
        status: string;
        message: string;
        status_code: number;
    }

    export interface IPhoneNumber {
        phone: string;
    }
    export interface IPhoneNumberOnce {
        phone: string;
        flag: string;
    }