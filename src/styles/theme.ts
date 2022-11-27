import {
    extendTheme,
    // ThemeConfig,
    theme as base
} from "@chakra-ui/react";


type ThemeConfig = {
    initialColorMode: string
    useSystemColorMode: boolean
}

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const styles = {
    styles: {
        global: (props: any) => ({
            "html, body": {
                bg: props.colorMode === "dark" ? "gray.800" : "white",
            },
        }),
    },
};

const theme = extendTheme(config, styles, {
    colors: {
        rose: {
            900: "#881337",
            800: "#9F1239",
            700: "#BE123C",
            600: "#E11D48",
            500: "#F43F5E",
            400: "#FB7185",
            300: "#FDA4AF",
            200: "#FECDD3",
            100: "#FFE4E6",
            50: "#FFF1F2",
        },
        red:{
            900: "#7F1D1D",
            800: "#991B1B",
            700: "#B91C1C",
            600: "#DC2626",
            500: "#EF4444",
            400: "#F87171",
            300: "#FCA5A5",
            200: "#FECACA",
            100: "#FEE2E2",
            50: "#FEF2F2",
        },
        blue: {
            900: "#1E3A8A",
            800: "#1E40AF",
            700: "#1D4ED8",
            600: "#2563EB",
            500: "#3B82F6",
            400: "#60A5FA",
            300: "#93C5FD",
            200: "#BFDBFE",
            100: "#DBEAFE",
            50: "#EFF6FF",
        },
        lightBlue: {
            900: "#0C4A6E",
            800: "#075985",
            700: "#0369A1",
            600: "#0284C7",
            500: "#0EA5E9",
            400: "#38BDF8",
            300: "#7DD3FC",
            200: "#BAE6FD",
            100: "#E0F2FE",
            50: "#F0F9FF",
        },
        gray: {
            900: "#111827",
            800: "#1F2937",
            700: "#374151",
            600: "#4B5563",
            500: "#6B7280",
            400: "#9CA3AF",
            300: "#D1D5DB",
            200: "#E5E7EB",
            100: "#F3F4F6",
            50: "#F9FAFB",
        },
    },
    fontSizes: {
        h1: "48px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "18px",
        h6: "16px",
        h7: "14px",
        text1: "24px",
        text2: "20px",
        text3: "18px",
        text4: "16px",
        text5: "14px",
        text6: "12px",
        text7: "10px"
    },
    lineHeights: {
        h1: "48px",
        h2: "40px",
        h3: "40px",
        h4: "36px",
        h5: "24px",
        h6: "24px",
        h7: "20px",
        lh32: "32px",
        lh28: "28px",
        lh24: "24px",
        lh20: "20px",
        lh16: "16px"
    },
    fonts: {
        body: `'Inter', ${base.fonts?.body}`,
        heading: `'Inter', ${base.fonts?.heading}`,
        secondary: `'DM Sans', ${base.fonts?.heading}`,
    },
    breakpoints: {
        sm: '37.5em',
        md: '60em',
        // lg:"88.75em"
    }
});

export default theme;
