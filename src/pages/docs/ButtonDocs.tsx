import { DocsLayout } from "@/components/layout/DocsLayout";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { APITable, PropDefinition } from "@/components/docs/APITable";
import { HelixButton } from "@/components/helix-ui";

const buttonProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "primary" | "secondary" | "outline" | "ghost" | "destructive" | "success"',
    default: '"default"',
    description: "The visual style variant of the button.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "icon"',
    default: '"md"',
    description: "The size of the button.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Shows a loading spinner and disables the button.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the button interaction.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the button.",
    required: true,
  },
];

const basicUsage = `import { HelixButton } from "helix-ui";

function MyComponent() {
  return (
    <HelixButton variant="primary">
      Click me
    </HelixButton>
  );
}`;

const variantsCode = `<HelixButton variant="default">Default</HelixButton>
<HelixButton variant="primary">Primary</HelixButton>
<HelixButton variant="secondary">Secondary</HelixButton>
<HelixButton variant="outline">Outline</HelixButton>
<HelixButton variant="ghost">Ghost</HelixButton>
<HelixButton variant="destructive">Destructive</HelixButton>
<HelixButton variant="success">Success</HelixButton>`;

const sizesCode = `<HelixButton size="sm">Small</HelixButton>
<HelixButton size="md">Medium</HelixButton>
<HelixButton size="lg">Large</HelixButton>`;

const statesCode = `<HelixButton loading>Loading</HelixButton>
<HelixButton disabled>Disabled</HelixButton>`;

export default function ButtonDocs() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Button</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Buttons allow users to trigger actions with a single click. They come in various 
            styles and sizes to fit different contexts and hierarchies.
          </p>
        </div>

        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-muted-foreground mb-6">
            Import the component and use it in your JSX. The button is fully accessible 
            and supports keyboard navigation.
          </p>
          <CodeBlock code={basicUsage} />
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Use different variants to communicate the importance and type of action.
          </p>
          <ComponentDemo title="All Variants">
            <HelixButton variant="default">Default</HelixButton>
            <HelixButton variant="primary">Primary</HelixButton>
            <HelixButton variant="secondary">Secondary</HelixButton>
            <HelixButton variant="outline">Outline</HelixButton>
            <HelixButton variant="ghost">Ghost</HelixButton>
            <HelixButton variant="destructive">Destructive</HelixButton>
            <HelixButton variant="success">Success</HelixButton>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={variantsCode} />
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Buttons come in three sizes to fit different contexts.
          </p>
          <ComponentDemo title="Size Comparison">
            <HelixButton size="sm">Small</HelixButton>
            <HelixButton size="md">Medium</HelixButton>
            <HelixButton size="lg">Large</HelixButton>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={sizesCode} />
          </div>
        </section>

        {/* States */}
        <section>
          <h2 className="text-2xl font-bold mb-4">States</h2>
          <p className="text-muted-foreground mb-6">
            Buttons support loading and disabled states.
          </p>
          <ComponentDemo title="Loading & Disabled">
            <HelixButton loading variant="primary">Loading</HelixButton>
            <HelixButton disabled>Disabled</HelixButton>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={statesCode} />
          </div>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="text-muted-foreground mb-6">
            Complete list of props for the Button component.
          </p>
          <APITable props={buttonProps} />
        </section>
      </div>
    </DocsLayout>
  );
}
