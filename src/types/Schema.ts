export interface Option {
    value: string;
    label: string;
  }
  
  export interface Validation {
    pattern?: string;
    message?: string;
    required?: boolean;
  }
  
  export interface FormField {
    id: string;
    type: 'text' | 'email' | 'textarea' | 'select' | 'radio' | string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    required?: boolean;
    options?: Option[];
    validation?: Validation;
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: FormField[];
  }