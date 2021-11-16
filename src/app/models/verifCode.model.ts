export interface VerifResponseRootObject {
    status: string;
    message: string;
    status_code: number;
}

export interface IVerifCode {
    phone: string;
    token: string;
}