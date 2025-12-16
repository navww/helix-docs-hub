import { DocsLayout } from "@/components/layout/DocsLayout";
import { HelixButton } from "@/components/helix-ui";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Palette, Code, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized for performance with minimal bundle size and instant interactions.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Thoughtfully crafted components with attention to detail and accessibility.",
  },
  {
    icon: Code,
    title: "Developer Experience",
    description: "TypeScript support, comprehensive docs, and intuitive APIs.",
  },
  {
    icon: Layers,
    title: "Composable",
    description: "Mix and match components to build complex UIs with ease.",
  },
];

const Index = () => {
  return (
    <DocsLayout>
      {/* Hero Section */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
            v1.0.0
          </span>
          <span className="text-sm text-muted-foreground">Now Available</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Build beautiful UIs with{" "}
          <span className="gradient-text">Helix UI</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          A modern, accessible, and customizable component library for React applications. 
          Ship faster with pre-built components that look great out of the box.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link to="/docs/button">
            <HelixButton variant="primary" size="lg">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </HelixButton>
          </Link>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <HelixButton variant="secondary" size="lg">
              View on GitHub
            </HelixButton>
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-2xl font-bold mb-8">Why Helix UI?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Components Preview */}
      <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        <p className="text-muted-foreground mb-8">
          Explore our collection of beautifully designed, accessible components.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "Button", href: "/docs/button", description: "Trigger actions with style" },
            { name: "Card", href: "/docs/card", description: "Container for content" },
            { name: "Input", href: "/docs/input", description: "Text input with validation" },
            { name: "Alert", href: "/docs/alert", description: "Feedback messages" },
          ].map((component) => (
            <Link
              key={component.name}
              to={component.href}
              className="group p-4 rounded-xl border border-border hover:border-primary/50 bg-card hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {component.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Install */}
      <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <div className="rounded-xl bg-code-background p-4 font-mono text-sm text-code-foreground overflow-x-auto">
          <span className="text-muted-foreground">$</span>{" "}
          <span className="text-success">npm install</span> helix-ui
        </div>
      </section>
    </DocsLayout>
  );
};

export default Index;
