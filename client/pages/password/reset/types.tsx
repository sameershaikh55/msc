export interface FormErrors {
  [key: string]: string;
}

export interface formData {
  password: string;
  confirmPassword: string;
}

export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & EventTarget;
}
