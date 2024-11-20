import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormSchema } from '../types/Schema';
import { 
  TextField, 
  SelectField, 
  RadioField, 
  TextareaField 
} from './Form_Field';

interface DynamicFormProps {
  schema: FormSchema;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const renderField = (field: any) => {
    switch(field.type) {
      case 'text':
      case 'email':
        return <TextField key={field.id} field={field} />;
      case 'select':
        return <SelectField key={field.id} field={field} />;
      case 'radio':
        return <RadioField key={field.id} field={field} />;
      case 'textarea':
        return <TextareaField key={field.id} field={field} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{schema.formTitle}</h2>
      <p className="text-gray-600 mb-6">{schema.formDescription}</p>
      
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {schema.fields.map(renderField)}
          
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>

      {isSubmitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};