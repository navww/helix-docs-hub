import { DocsLayout } from "@/components/layout/DocsLayout";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { APITable, PropDefinition } from "@/components/docs/APITable";
import { 
  HelixCard, 
  HelixCardHeader, 
  HelixCardTitle, 
  HelixCardDescription, 
  HelixCardContent, 
  HelixCardFooter,
  HelixButton 
} from "@/components/helix-ui";

const cardProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "elevated" | "outlined" | "glass"',
    default: '"default"',
    description: "The visual style variant of the card.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the card.",
    required: true,
  },
];

const basicUsage = `import { 
  HelixCard, 
  HelixCardHeader, 
  HelixCardTitle, 
  HelixCardDescription, 
  HelixCardContent 
} from "helix-ui";

function MyComponent() {
  return (
    <HelixCard>
      <HelixCardHeader>
        <HelixCardTitle>Card Title</HelixCardTitle>
        <HelixCardDescription>
          Card description goes here.
        </HelixCardDescription>
      </HelixCardHeader>
      <HelixCardContent>
        Your content here.
      </HelixCardContent>
    </HelixCard>
  );
}`;

const variantsCode = `<HelixCard variant="default">Default</HelixCard>
<HelixCard variant="elevated">Elevated</HelixCard>
<HelixCard variant="outlined">Outlined</HelixCard>
<HelixCard variant="glass">Glass</HelixCard>`;

const withFooterCode = `<HelixCard>
  <HelixCardHeader>
    <HelixCardTitle>Upgrade Plan</HelixCardTitle>
    <HelixCardDescription>
      Get access to premium features.
    </HelixCardDescription>
  </HelixCardHeader>
  <HelixCardContent>
    <p>Includes unlimited projects, priority support, and more.</p>
  </HelixCardContent>
  <HelixCardFooter>
    <HelixButton variant="primary">Upgrade Now</HelixButton>
  </HelixCardFooter>
</HelixCard>`;

export default function CardDocs() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Card</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cards are containers that group related content and actions. They provide a 
            clean surface for displaying information in a structured way.
          </p>
        </div>

        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-muted-foreground mb-6">
            Cards are composed of multiple sub-components for flexibility.
          </p>
          <ComponentDemo title="Basic Card">
            <HelixCard className="w-full max-w-sm">
              <HelixCardHeader>
                <HelixCardTitle>Card Title</HelixCardTitle>
                <HelixCardDescription>
                  This is a description of the card content.
                </HelixCardDescription>
              </HelixCardHeader>
              <HelixCardContent>
                <p className="text-sm text-muted-foreground">
                  Your content goes here. Cards can contain any type of content.
                </p>
              </HelixCardContent>
            </HelixCard>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={basicUsage} />
          </div>
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Cards come in different styles to suit various design needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <HelixCard variant="default">
              <HelixCardHeader>
                <HelixCardTitle>Default</HelixCardTitle>
                <HelixCardDescription>Standard border style</HelixCardDescription>
              </HelixCardHeader>
            </HelixCard>
            <HelixCard variant="elevated">
              <HelixCardHeader>
                <HelixCardTitle>Elevated</HelixCardTitle>
                <HelixCardDescription>With shadow effect</HelixCardDescription>
              </HelixCardHeader>
            </HelixCard>
            <HelixCard variant="outlined">
              <HelixCardHeader>
                <HelixCardTitle>Outlined</HelixCardTitle>
                <HelixCardDescription>Transparent with border</HelixCardDescription>
              </HelixCardHeader>
            </HelixCard>
            <HelixCard variant="glass" className="gradient-bg">
              <HelixCardHeader>
                <HelixCardTitle>Glass</HelixCardTitle>
                <HelixCardDescription>Frosted glass effect</HelixCardDescription>
              </HelixCardHeader>
            </HelixCard>
          </div>
          <CodeBlock code={variantsCode} />
        </section>

        {/* With Footer */}
        <section>
          <h2 className="text-2xl font-bold mb-4">With Footer</h2>
          <p className="text-muted-foreground mb-6">
            Add a footer section for actions related to the card content.
          </p>
          <ComponentDemo title="Card with Footer">
            <HelixCard className="w-full max-w-sm">
              <HelixCardHeader>
                <HelixCardTitle>Upgrade Plan</HelixCardTitle>
                <HelixCardDescription>
                  Get access to premium features.
                </HelixCardDescription>
              </HelixCardHeader>
              <HelixCardContent>
                <p className="text-sm text-muted-foreground">
                  Includes unlimited projects, priority support, and more.
                </p>
              </HelixCardContent>
              <HelixCardFooter>
                <HelixButton variant="primary" size="sm">Upgrade Now</HelixButton>
              </HelixCardFooter>
            </HelixCard>
          </ComponentDemo>
          <div className="mt-4">
            <CodeBlock code={withFooterCode} />
          </div>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="text-muted-foreground mb-6">
            Props for the Card component.
          </p>
          <APITable props={cardProps} />
        </section>
      </div>
    </DocsLayout>
  );
}
