import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField } from '../types/Schema';

export const TextField: React.FC<{ field: FormField }> = ({ field }) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...register(field.id, {
          required: field.required ? `${field.label} is required` : false,
          pattern: field.validation?.pattern 
            ? { 
                value: new RegExp(field.validation.pattern), 
                message: field.validation.message || 'Invalid input' 
              }
            : undefined
        })}
        type={field.type}
        placeholder={field.placeholder}
        className={`mt-1 block w-full rounded-md border ${
          errors[field.id] ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      />
      {errors[field.id] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[field.id]?.message as string}
        </p>
      )}
    </div>
  );
};

export const SelectField: React.FC<{ field: FormField }> = ({ field }) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(field.id, {
          required: field.required ? `${field.label} is required` : false
        })}
        className={`mt-1 block w-full rounded-md border ${
          errors[field.id] ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      >
        <option value="">Select {field.label}</option>
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[field.id] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[field.id]?.message as string}
        </p>
      )}
    </div>
  );
};

export const RadioField: React.FC<{ field: FormField }> = ({ field }) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="mb-4">
      <legend className="text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </legend>
      <div className="mt-2 space-y-2">
        {field.options?.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              {...register(field.id, {
                required: field.required ? `${field.label} is required` : false
              })}
              type="radio"
              value={option.value}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label className="ml-2 block text-sm text-gray-900">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {errors[field.id] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[field.id]?.message as string}
        </p>
      )}
    </div>
  );
};

export const TextareaField: React.FC<{ field: FormField }> = ({ field }) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        {...register(field.id, {
          required: field.required ? `${field.label} is required` : false
        })}
        placeholder={field.placeholder}
        className={`mt-1 block w-full rounded-md border ${
          errors[field.id] ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        rows={4}
      />
      {errors[field.id] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[field.id]?.message as string}
        </p>
      )}
    </div>
  );
};