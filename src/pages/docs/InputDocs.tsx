import * as React from "react";
import { DocsLayout } from "@/components/layout/DocsLayout";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { APITable, PropDefinition } from "@/components/docs/APITable";
import { HelixInput, HelixButton } from "@/components/helix-ui";

const inputProps: PropDefinition[] = [
  {
    name: "label",
    type: "string",
    description: "Label text displayed above the input.",
  },
  {
    name: "error",
    type: "string",
    description: "Error message to display. Shows error styling when set.",
  },
  {
    name: "helperText",
    type: "string",
    description: "Helper text displayed below the input.",
  },
  {
    name: "type",
    type: "string",
    default: '"text"',
    description: "The input type (text, email, password, etc.).",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text when the input is empty.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input.",
  },
];

const basicUsage = `import { HelixInput } from "helix-ui";

function MyComponent() {
  return (
    <HelixInput
      label="Email"
      type="email"
      placeholder="you@example.com"
    />
  );
}`;

const withErrorCode = `<HelixInput
  label="Email"
  type="email"
  value="invalid-email"
  error="Please enter a valid email address"
/>`;

const withHelperCode = `<HelixInput
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>`;

export default function InputDocs() {
  const [email, setEmail] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  const handleValidate = () => {
    setShowError(!email.includes("@"));
  };

  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Input</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Input components allow users to enter and edit text. They support labels, 
            validation states, and helper text for a complete form experience.
          </p>
        </div>

        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-muted-foreground mb-6">
            A simple text input with a label and placeholder.
          </p>
          <ComponentDemo title="Basic Input">
            <div className="w-full max-w-sm">
              <HelixInput
                label="Email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={basicUsage} />
          </div>
        </section>

        {/* Error State */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Error State</h2>
          <p className="text-muted-foreground mb-6">
            Display validation errors with the error prop.
          </p>
          <ComponentDemo title="Input with Error">
            <div className="w-full max-w-sm">
              <HelixInput
                label="Email"
                type="email"
                value="invalid-email"
                error="Please enter a valid email address"
              />
            </div>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={withErrorCode} />
          </div>
        </section>

        {/* Helper Text */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Helper Text</h2>
          <p className="text-muted-foreground mb-6">
            Provide additional context with helper text.
          </p>
          <ComponentDemo title="Input with Helper Text">
            <div className="w-full max-w-sm">
              <HelixInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                helperText="Must be at least 8 characters"
              />
            </div>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={withHelperCode} />
          </div>
        </section>

        {/* Interactive Example */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Interactive Example</h2>
          <p className="text-muted-foreground mb-6">
            Try out the validation behavior.
          </p>
          <ComponentDemo title="Live Validation Demo">
            <div className="w-full max-w-sm space-y-4">
              <HelixInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setShowError(false);
                }}
                error={showError ? "Please enter a valid email address" : undefined}
              />
              <HelixButton onClick={handleValidate} variant="primary" size="sm">
                Validate
              </HelixButton>
            </div>
          </ComponentDemo>
        </section>

        {/* Disabled State */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
          <ComponentDemo title="Disabled Input">
            <div className="w-full max-w-sm">
              <HelixInput
                label="Username"
                value="john_doe"
                disabled
              />
            </div>
          </ComponentDemo>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="text-muted-foreground mb-6">
            Props for the Input component.
          </p>
          <APITable props={inputProps} />
        </section>
      </div>
    </DocsLayout>
  );
}
