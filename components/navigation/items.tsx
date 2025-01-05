import {
  LayoutDashboard,
  Users,
  LineChart,
  Settings,
  HelpCircle,
  BarChart3,
  Building2,
  Workflow,
  DollarSign,
  Package,
  PuzzlePiece,
  MessageSquareMore,
} from "lucide-react";

export const navigationItems = [
  {
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
      },
    ],
  },
  {
    title: "Sales & Marketing",
    items: [
      {
        label: "Leads",
        icon: Users,
        href: "/sales/leads",
      },
      {
        label: "Campaigns",
        icon: LineChart,
        href: "/sales/campaigns",
      },
      {
        label: "Sales Pipeline",
        icon: BarChart3,
        href: "/sales/pipeline",
      },
    ],
  },
  {
    title: "Customer Management",
    items: [
      {
        label: "CRM Overview",
        icon: Building2,
        href: "/customers/overview",
      },
      {
        label: "Customer Profiles",
        icon: Users,
        href: "/customers/profiles",
      },
      {
        label: "Support Tickets",
        icon: MessageSquareMore,
        href: "/customers/tickets",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        label: "Workflow Management",
        icon: Workflow,
        href: "/operations/workflow",
      },
      {
        label: "Project Management",
        icon: LayoutDashboard,
        href: "/operations/projects",
      },
      {
        label: "Resource Allocation",
        icon: Users,
        href: "/operations/resources",
      },
    ],
  },
  {
    title: "Finance & Accounting",
    items: [
      {
        label: "Invoicing",
        icon: DollarSign,
        href: "/finance/invoicing",
      },
      {
        label: "Budgeting",
        icon: DollarSign,
        href: "/finance/budgeting",
      },
      {
        label: "Financial Reports",
        icon: LineChart,
        href: "/finance/reports",
      },
    ],
  },
  {
    title: "Inventory & Supply Chain",
    items: [
      {
        label: "Inventory Management",
        icon: Package,
        href: "/inventory/management",
      },
      {
        label: "Supplier Management",
        icon: Building2,
        href: "/inventory/suppliers",
      },
      {
        label: "Order Fulfillment",
        icon: Package,
        href: "/inventory/orders",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        label: "Analytics & Insights",
        icon: LineChart,
        href: "/analytics",
      },
      {
        label: "Integrations",
        icon: PuzzlePiece,
        href: "/integrations",
      },
      {
        label: "Settings",
        icon: Settings,
        href: "/settings",
      },
      {
        label: "Support",
        icon: HelpCircle,
        href: "/support",
      },
    ],
  },
];