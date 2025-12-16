import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Home, 
  Square, 
  RectangleHorizontal, 
  TextCursor, 
  Bell,
  ChevronLeft,
  Menu,
  X,
  Layers,
  LucideIcon
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface NavGroup {
  name: string;
  items: NavItem[];
}

type NavEntry = NavItem | NavGroup;

const navigation: NavEntry[] = [
  { name: "Introduction", href: "/", icon: Home },
  { 
    name: "Components", 
    items: [
      { name: "Button", href: "/docs/button", icon: Square },
      { name: "Card", href: "/docs/card", icon: RectangleHorizontal },
      { name: "Input", href: "/docs/input", icon: TextCursor },
      { name: "Alert", href: "/docs/alert", icon: Bell },
    ] 
  },
];

function isNavGroup(entry: NavEntry): entry is NavGroup {
  return 'items' in entry;
}

interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const allItems: NavItem[] = navigation.flatMap(entry => 
    isNavGroup(entry) ? entry.items : [entry]
  );

  const filteredItems = searchQuery
    ? allItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const sidebarContent = (
    <>
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Layers className="h-5 w-5 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg text-sidebar-foreground">Helix UI</span>
          )}
        </Link>
      </div>

      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-9 pr-3 rounded-lg bg-sidebar-accent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 border border-sidebar-border"
            />
          </div>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto p-4 pt-0">
        {filteredItems ? (
          <div className="space-y-1">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
                  {!isCollapsed && item.name}
                </Link>
              );
            })}
            {filteredItems.length === 0 && (
              <p className="text-sm text-muted-foreground px-3 py-2">No results found</p>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {navigation.map((entry, entryIndex) => (
              <div key={entryIndex}>
                {isNavGroup(entry) ? (
                  <>
                    {!isCollapsed && (
                      <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {entry.name}
                      </h3>
                    )}
                    <div className="space-y-1">
                      {entry.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                              location.pathname === item.href
                                ? "bg-primary text-primary-foreground"
                                : "text-sidebar-foreground hover:bg-sidebar-accent"
                            )}
                          >
                            {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
                            {!isCollapsed && item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link
                    to={entry.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === entry.href
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    )}
                  >
                    {entry.icon && <entry.icon className="h-4 w-4 flex-shrink-0" />}
                    {!isCollapsed && entry.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      <div className="p-4 border-t border-sidebar-border hidden lg:block">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-sidebar-accent"
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
          {!isCollapsed && <span className="ml-2">Collapse</span>}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-soft"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-sidebar transform transition-transform duration-300 border-r border-sidebar-border flex flex-col shadow-elevated",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-sidebar-accent"
        >
          <X className="h-5 w-5" />
        </button>
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col fixed inset-y-0 left-0 z-30 bg-sidebar border-r border-sidebar-border transition-all duration-300 shadow-soft",
          isCollapsed ? "w-16" : "w-64",
          className
        )}
      >
        {sidebarContent}
      </aside>

      {/* Spacer for main content */}
      <div className={cn("hidden lg:block transition-all duration-300", isCollapsed ? "w-16" : "w-64")} />
    </>
  );
}
