import * as React from "react"

export const SortableRowContext = React.createContext<{
  attributes: Record<string, any>;
  listeners: Record<string, any> | undefined;
  setActivatorNodeRef: (node: HTMLElement | null) => void;
} | null>(null);
