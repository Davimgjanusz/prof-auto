"use client";
import { jsx } from "react/jsx-runtime";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return jsx(
    Sonner,
    {
      theme,
      className: "toaster group",
      icons: {
        success: jsx(CircleCheckIcon, { className: "size-4" }),
        info: jsx(InfoIcon, { className: "size-4" }),
        warning: jsx(TriangleAlertIcon, { className: "size-4" }),
        error: jsx(OctagonXIcon, { className: "size-4" }),
        loading: jsx(Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...props
    }
  );
};
export {
  Toaster
};
