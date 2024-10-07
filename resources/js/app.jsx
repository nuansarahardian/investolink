import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { TranslationProvider } from "react-google-multi-lang";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <TranslationProvider
                apiKey={import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY}
                defaultLanguage="id"
            >
                <App {...props} />
            </TranslationProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
