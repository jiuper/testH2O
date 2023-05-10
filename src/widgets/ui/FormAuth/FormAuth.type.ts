export interface IFormAuthType {
    handleUserDate: (values: IFormDate) => void;
}

export interface IFormDate {
    login: string;
    password: string;
}