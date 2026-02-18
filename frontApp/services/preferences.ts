export type ThemeMode = "light" | "dark" | "system";

// Stub storage for now
let themeMode: ThemeMode = "system";

export async function getThemeMode(): Promise<ThemeMode> {
  await new Promise((r) => setTimeout(r, 80));
  return themeMode;
}

export async function setThemeMode(mode: ThemeMode): Promise<void> {
  await new Promise((r) => setTimeout(r, 80));
  themeMode = mode;
}
