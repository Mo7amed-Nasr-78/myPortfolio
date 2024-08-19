import { PluginAPI } from "tailwindcss/types/config";

declare module "tailwindcss/types/config" {
    interface PluginAPI {
        addUtilities: (
            utilities: Record<string, Record<string, string>>
        ) => void;
    }
}
