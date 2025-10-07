// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

/**
 * Providers Component
 * 
 * Wraps the application with necessary context providers.
 * Currently provides theme management functionality for dark/light mode support.
 * 
 * This component must be marked as a client component to use React context.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped with providers
 * @returns {JSX.Element} ThemeProvider wrapper with configured theme settings
 * 
 * @example
 * ```tsx
 * <Providers>
 *   <YourApp />
 * </Providers>
 * ```
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
