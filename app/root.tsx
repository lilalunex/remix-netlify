import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";

import ColorPalette from "./routes/utilities/ColorPalette";

import "./css/main.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Ideas", path: "/" },
  { name: "Tools", path: "/" },
  { name: "Partner", path: "/" }
]

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Lepcha&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Lepcha&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ColorPalette></ColorPalette>
        <nav>
          <ul className="flex justify-between items-center px-24">
            {navLinks?.map((link) => (
              <li key={link.path}>
                <a href={link.path}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <main>{children}</main>
        <footer>
          
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Outlet />
  );
}