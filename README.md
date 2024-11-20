Dynamic Form Generator
Overview
Dynamic Form Generator is a powerful, flexible React application that allows users to create dynamic forms in real-time by editing a JSON schema. The application provides a split-screen interface with a JSON editor and live form preview, enabling instant form generation and validation.
🚀 Features

Real-time Form Generation: Instantly create forms by editing JSON
Multiple Field Types: Support for text, email, select, radio, and textarea inputs
Dynamic Validation: Automatic form validation based on JSON schema
Responsive Design: Mobile-friendly layout
TypeScript Support: Full type safety
Tailwind CSS Styling: Modern, clean UI

🛠 Tech Stack

Frontend: React 18+
Language: TypeScript
Styling: Tailwind CSS
Form Management: React Hook Form
JSON Editing: Monaco Editor
Testing: Jest, React Testing Library

📦 Prerequisites

Node.js (v14 or later)
npm (v6 or later)

🔧 Installation

Clone the repository

bashCopygit clone https://github.com/yourusername/dynamic-form-generator.git
cd dynamic-form-generator

Install dependencies

bashCopynpm install

Start the development server

bashCopynpm start
📝 JSON Schema Structure
The form is generated based on a JSON schema with the following structure:
jsonCopy{
  "formTitle": "Form Title",
  "formDescription": "Form Description",
  "fields": [
    {
      "id": "fieldId",
      "type": "text|email|textarea|select|radio",
      "label": "Field Label",
      "required": true|false,
      "placeholder": "Optional placeholder",
      "validation": {
        "pattern": "Optional regex pattern",
        "message": "Optional error message"
      },
      "options": [
        {"value": "optionValue", "label": "Option Label"}
      ]
    }
  ]
}
🧪 Running Tests
bashCopy# Run unit tests
npm test

# Run end-to-end tests
npm run test:e2e
📋 Example Form Schemas
1. Project Requirements Survey
jsonCopy{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Tell us about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Invalid email address"
      }
    }
  ]
}
🌟 Bonus Features

Real-time JSON validation
Responsive mobile layout
Comprehensive error handling
Instant form preview

🚧 Potential Improvements

Dark mode support
More complex validation rules
Export/import form schemas
Additional field types