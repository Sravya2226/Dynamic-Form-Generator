import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { DynamicForm } from './components/Dynamic_Form_Generator';
import { FormSchema } from './types/Schema';

// Change from named export to default export
export default function App() {
  const [schema, setSchema] = useState<FormSchema>({
    formTitle: "Project Requirements Survey",
    formDescription: "Please fill out this survey about your project needs",
    fields: []
  });
  const [schemaText, setSchemaText] = useState<string>(JSON.stringify(schema, null, 2));
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const parsedSchema = JSON.parse(schemaText);
      setSchema(parsedSchema);
      setValidationError(null);
    } catch (error) {
      setValidationError('Invalid JSON');
    }
  }, [schemaText]);

  const handleEditorChange = (value: string) => {
    setSchemaText(value);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">JSON Schema Editor</h2>
        <MonacoEditor
          height="600"
          language="json"
          theme="vs-dark"
          value={schemaText}
          onChange={handleEditorChange}
          options={{
            selectOnLineNumbers: true,
            minimap: { enabled: false }
          }}
        />
        {validationError && (
          <div className="mt-2 text-red-500">{validationError}</div>
        )}
      </div>
      <div className="w-full md:w-1/2 p-4 bg-gray-50 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Form Preview</h2>
        {!validationError ? (
          <DynamicForm schema={schema} />
        ) : (
          <div className="text-red-500">Fix JSON to generate form</div>
        )}
      </div>
    </div>
  );
}