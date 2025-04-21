import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "eCommerce",
            url: "/",
          },
        ],
      },
      {
        title: "HTTP Status",
        href: "/http-status",
        icon: Icons.HTTP,
        items: [],
      },
      {
        title: "Budget Changes",
        url: "/budget_changes",
        icon: Icons.Dollar,
        items: [],
      },
    
      {
        title: "Daily Spending Checks",
        url: "/daily_spending_checks",
        icon: Icons.Dollar,
        items: [],
      },

      {
        title: "Financial Reports",
        url: "/financial_reports",
        icon: Icons.Dollar,
        items: [],
      },
      {
        title: "Planning & Accuracy",
        url: "/planning",
        icon: Icons.Alphabet,
        items: []
      },
    ],
  },
]