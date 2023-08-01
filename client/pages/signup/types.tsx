export interface FormErrors {
  [key: string]: string;
}

export interface formData {
  firstName: string;
  surname: string;
  email: string;
  password: string;
}

export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & EventTarget;
}
