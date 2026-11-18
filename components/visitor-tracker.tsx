
"use client";

import { useEffect } from "react";

const VISITOR_KEY = "pratham:visitor:id";
const SESSION_KEY = "pratham:visitor:notified";

function getVisitorId() {
  let id = localStorage.getItem(VISITOR_KEY);

  if (!id) {
    id = `v_${crypto.randomUUID()}`;
    localStorage.setItem(VISITOR_KEY, id);
  }

  return id;
}

export default function VisitorTracker() {
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    sessionStorage.setItem(SESSION_KEY, "true");

    async function trackVisitor() {
      try {
        const existingVisitor = localStorage.getItem(VISITOR_KEY);
        const visitorId = getVisitorId();
        const params = new URLSearchParams(window.location.search);

        const response = await fetch("/api/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          keepalive: true,
          body: JSON.stringify({
            visitorId,
            status: existingVisitor ? "Returning" : "First-time",
            page: window.location.pathname,
            referrer: document.referrer || "Direct",
            timestamp: new Date().toISOString(),

            browser: {
              userAgent: navigator.userAgent,
              language: navigator.language,
              timezone:
                Intl.DateTimeFormat().resolvedOptions().timeZone,
              screen: `${screen.width} × ${screen.height}`,
              platform: navigator.userAgentData?.platform ||
                navigator.platform ||
                "Unknown",
              mobile: navigator.userAgentData?.mobile ?? false,
            },

            acquisition: {
              source: params.get("utm_source"),
              medium: params.get("utm_medium"),
              campaign: params.get("utm_campaign"),
            },
          }),
        });

        if (!response.ok) {
          sessionStorage.removeItem(SESSION_KEY);
          console.error("Visitor tracking failed:", response.status);
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
