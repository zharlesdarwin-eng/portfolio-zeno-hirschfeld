/**
 * @file ThemeProvider.tsx
 * @description Wrapper rond `next-themes` die de HTML class-gebaseerde donkere modus verzorgt.
 * 
 * @layer Infrastructure / Theming
 * @architecture Client Component ("use client") die attributen op het `<html>` element muteert.
 */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component die theme context levert aan de gehele component-boom.
 * 
 * @param props Eigenschappen doorgegeven aan NextThemesProvider (attribute="class", defaultTheme, etc.)
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
