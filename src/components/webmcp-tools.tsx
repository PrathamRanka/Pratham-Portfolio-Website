'use client';

import { useEffect } from 'react';

type ModelContext = {
  registerTool?: (tool: {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
    execute: (input: Record<string, unknown>, options?: { signal?: AbortSignal }) => Promise<unknown>;
  }, options?: { signal?: AbortSignal }) => Promise<unknown> | unknown;
};

export function WebMcpTools() {
  useEffect(() => {
    const modelContext = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!modelContext?.registerTool) return;
    const controller = new AbortController();
    const baseUrl = window.location.origin;
    const tools = [
      {
        name: 'get_profile',
        description: 'Read the public structured profile for Pratham Ranka.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        execute: async (_input: Record<string, unknown>, options?: { signal?: AbortSignal }) => {
          const response = await fetch(`${baseUrl}/api/profile`, { signal: options?.signal || controller.signal });
          return response.json();
        },
      },
      {
        name: 'get_projects',
        description: 'Read public software projects by Pratham Ranka.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        execute: async (_input: Record<string, unknown>, options?: { signal?: AbortSignal }) => {
          const response = await fetch(`${baseUrl}/api/projects`, { signal: options?.signal || controller.signal });
          return response.json();
        },
      },
    ];
    void Promise.all(tools.map((tool) => modelContext.registerTool?.(tool, { signal: controller.signal })));
    return () => controller.abort();
  }, []);

  return null;
}
