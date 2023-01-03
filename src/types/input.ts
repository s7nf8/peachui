export type InputValidator<T> = (value: T) => boolean;

export interface InputValidation<T> {
    valid: boolean | null;
    validator?: InputValidator<T>;
    error?: string;
}

export interface InputProps<T> {
    modelValue?: T;
    validation?: InputValidation<T>;
    disabled?: boolean;
}

export interface InputEmits<T = any> {
    (e: "update:modelValue", value: T): void;
}

export type InputTextType = "text" | "email" | "password";

export interface InputTextProps extends InputProps<string> {
    type?: InputTextType;
    modelValue?: string;
    placeholder?: string;
    bordered?: boolean;
}

export type InputCheckboxType = "checkbox" | "toggle";

export interface InputCheckboxProps extends InputProps<boolean> {
    type?: InputCheckboxType;
    modelValue?: boolean;
    bordered?: boolean;
}

export interface InputRadioProps extends InputProps<boolean> {
    modelValue?: boolean;
}

export type InputFileType = "file" | "fileList" | "dataUrl";

export interface InputFileProps extends InputProps<FileList | File | string> {
    type?: InputFileType;
    modelValue?: FileList | File | string;
    bordered?: boolean;
}
