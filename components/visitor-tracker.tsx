
"use client";

import { useEffect } from "react";

const COOLDOWN = 30 * 60 * 1000;
const STORAGE_KEY = "pratham:visitor:last-alert";

export default function VisitorTracker() {
  useEffect(() => {
    async function track() {
      try {
        const now = Date.now();
        const lastAlert = Number(
          localStorage.getItem(STORAGE_KEY) || 0
        );

        if (now - lastAlert < COOLDOWN) return;

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
          throw new Error(`Request failed: ${response.status}`);
        }

        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch (error) {
        console.error("Visitor tracking failed:", error);
      }
    }

    void track();
  }, []);

  return null;
}
