import * as React from "react";
import { DocsLayout } from "@/components/layout/DocsLayout";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { APITable, PropDefinition } from "@/components/docs/APITable";
import { HelixAlert, HelixButton } from "@/components/helix-ui";

const alertProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "success" | "error" | "warning" | "info"',
    default: '"default"',
    description: "The visual style variant of the alert.",
  },
  {
    name: "title",
    type: "string",
    description: "Optional title for the alert.",
  },
  {
    name: "dismissible",
    type: "boolean",
    default: "false",
    description: "Shows a close button to dismiss the alert.",
  },
  {
    name: "onDismiss",
    type: "() => void",
    description: "Callback when the alert is dismissed.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content/message of the alert.",
  },
];

const basicUsage = `import { HelixAlert } from "helix-ui";

function MyComponent() {
  return (
    <HelixAlert variant="success" title="Success!">
      Your changes have been saved.
    </HelixAlert>
  );
}`;

const variantsCode = `<HelixAlert variant="success" title="Success">
  Operation completed successfully.
</HelixAlert>

<HelixAlert variant="error" title="Error">
  Something went wrong. Please try again.
</HelixAlert>

<HelixAlert variant="warning" title="Warning">
  Please review before continuing.
</HelixAlert>

<HelixAlert variant="info" title="Info">
  New features are available.
</HelixAlert>`;

const dismissibleCode = `<HelixAlert
  variant="info"
  title="Update Available"
  dismissible
  onDismiss={() => console.log("Dismissed!")}
>
  A new version is available. Refresh to update.
</HelixAlert>`;

export default function AlertDocs() {
  const [showAlert, setShowAlert] = React.useState(true);
  const [key, setKey] = React.useState(0);

  const resetAlert = () => {
    setShowAlert(true);
    setKey(k => k + 1);
  };

  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Alert</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alerts display important messages to users. They come in different variants 
            to convey success, error, warning, or informational states.
          </p>
        </div>

        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-muted-foreground mb-6">
            Alerts automatically display the appropriate icon based on the variant.
          </p>
          <ComponentDemo title="Success Alert">
            <div className="w-full max-w-md">
              <HelixAlert variant="success" title="Success!">
                Your changes have been saved successfully.
              </HelixAlert>
            </div>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={basicUsage} />
          </div>
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Use different variants to convey different types of messages.
          </p>
          <div className="space-y-4 mb-4">
            <HelixAlert variant="success" title="Success">
              Operation completed successfully.
            </HelixAlert>
            <HelixAlert variant="error" title="Error">
              Something went wrong. Please try again.
            </HelixAlert>
            <HelixAlert variant="warning" title="Warning">
              Please review your input before continuing.
            </HelixAlert>
            <HelixAlert variant="info" title="Info">
              New features are available in this update.
            </HelixAlert>
            <HelixAlert variant="default" title="Note">
              This is a default alert for general messages.
            </HelixAlert>
          </div>
          <CodeBlock code={variantsCode} />
        </section>

        {/* Dismissible */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Dismissible Alerts</h2>
          <p className="text-muted-foreground mb-6">
            Add a close button to allow users to dismiss the alert.
          </p>
          <ComponentDemo title="Dismissible Alert">
            <div className="w-full max-w-md space-y-4">
              <HelixAlert
                key={key}
                variant="info"
                title="Update Available"
                dismissible
                onDismiss={() => setShowAlert(false)}
              >
                A new version is available. Refresh to update.
              </HelixAlert>
              {!showAlert && (
                <HelixButton onClick={resetAlert} size="sm" variant="secondary">
                  Show Alert Again
                </HelixButton>
              )}
            </div>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={dismissibleCode} />
          </div>
        </section>

        {/* Without Title */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Without Title</h2>
          <p className="text-muted-foreground mb-6">
            Alerts can be used without a title for simpler messages.
          </p>
          <ComponentDemo title="Simple Alerts">
            <div className="w-full max-w-md space-y-4">
              <HelixAlert variant="success">
                Settings saved successfully.
              </HelixAlert>
              <HelixAlert variant="error">
                Failed to load data. Please refresh.
              </HelixAlert>
            </div>
          </ComponentDemo>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="text-muted-foreground mb-6">
            Props for the Alert component.
          </p>
          <APITable props={alertProps} />
        </section>
      </div>
    </DocsLayout>
  );
}
