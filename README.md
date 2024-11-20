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

Core Dependencies:

react & react-dom (v18+)
typescript
tailwindcss and its peer dependencies:
      postcss
      autoprefixer

Form Handling:

react-hook-form - For form state management and validation
@hookform/resolvers - For schema validation
zod - For runtime type checking and schema validation

JSON Editor:

@monaco-editor/react - For JSON editing with syntax highlighting
prettier - For JSON formatting

Here's how you would install these core dependencies:
# Core dependencies
npm install react react-dom typescript

# Tailwind and styling
npm install -D tailwindcss postcss autoprefixer

# Form handling
npm install react-hook-form @hookform/resolvers zod

# JSON editor
npm install @monaco-editor/react prettier

# Testing
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @playwright/test

# Types
npm install -D @types/react @types/react-dom @types/jest

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
 {

  "formTitle": "Project Requirements Survey",

  "formDescription": "Please fill out this survey about your project needs",

  "fields": [

    {

      "id": "name",

      "type": "text",

      "label": "Full Name",

      "required": true,

      "placeholder": "Enter your full name"

    },

    {

      "id": "email",

      "type": "email",

      "label": "Email Address",

      "required": true,

      "placeholder": "you@example.com",

      "validation": {

        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",

        "message": "Please enter a valid email address"

      }

    },

    {

      "id": "companySize",

      "type": "select",

      "label": "Company Size",

      "required": true,

      "options": [

        { "value": "1-50", "label": "1-50 employees" },

        { "value": "51-200", "label": "51-200 employees" },

        { "value": "201-1000", "label": "201-1000 employees" },

        { "value": "1000+", "label": "1000+ employees" }

      ]

    },

    {

      "id": "industry",

      "type": "radio",

      "label": "Industry",

      "required": true,

      "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

    },

    {

      "id": "timeline",

      "type": "select",

      "label": "Project Timeline",

      "required": true,

      "options": [

        { "value": "immediate", "label": "Immediate (within 1 month)" },

        { "value": "short", "label": "Short-term (1-3 months)" },

        { "value": "medium", "label": "Medium-term (3-6 months)" },

        { "value": "long", "label": "Long-term (6+ months)" }

      ]

    },

    {

      "id": "comments",

      "type": "textarea",

      "label": "Additional Comments",

      "required": false,

      "placeholder": "Any other details you'd like to share..."

    }

  ]

}

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
