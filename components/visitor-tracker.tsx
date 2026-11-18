
"use client";

import { useEffect } from "react";

const SESSION_KEY = "pratham:visitor:notified";

export default function VisitorTracker() {
  useEffect(() => {
    // One notification per browser tab session.
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Set before sending to prevent duplicate requests.
    sessionStorage.setItem(SESSION_KEY, "true");

    async function trackVisitor() {
      try {
        const response = await fetch("/api/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          keepalive: true,
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer || "Direct",
          }),
        });

        if (!response.ok) {
          sessionStorage.removeItem(SESSION_KEY);
          throw new Error(`Request failed: ${response.status}`);
        }
      } catch (error) {
        sessionStorage.removeItem(SESSION_KEY);
        console.error("Visitor tracking failed:", error);
      }
    }

    void trackVisitor();
  }, []);

  return null;
}
