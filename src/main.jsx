import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./tailwind.css";
// require("dotenv").config();
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export function Welcome() {
  return <div>Hello you are signed in</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      publishableKey={clerkPubKey}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
