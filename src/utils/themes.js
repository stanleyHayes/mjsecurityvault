import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: "Outfit, Urbanist, RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#247FFB"
        },
        background: {
            default: "#FFFFFF",
            paper: "#EDF4FF",
            accent: "#FFF6E9",
            gray: "#f6f7f8"
        },
        text: {
            primary: "#0b1d3c",
            secondary: "#8c8c8d",
            title: "#3d7df6",
            accent: "#c89743"
        },
        light: {
            secondary: "rgba(36,127,251,0.3)",
            accent: "rgba(251,160,36,0.3)",
        },
        colors: {
            accent: "#FBA024",
            footer: "#000137"
        },
        icon: {
            accent: "#c89743",
            secondary: "#247FFB",
            accentBackground: "rgba(200,151,67,0.05)",
            secondaryBackground: "rgba(36,127,251,0.05)"
        },
        mode: "light",
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: "Outfit, Urbanist, RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#247FFB"
        },
        background: {
            default: "#1b1a1a",
            paper: "#252729",
            secondary: "#EDF4FF",
            accent: "#FFF6E9",
            gray: "#252729"
        },
        text: {
            primary: "#fdfdfd",
            secondary: "rgba(255,255,255,0.55)",
            title: "#3d7df6",
            accent: "#c89743"
        },
        light: {
            secondary: "rgba(36,127,251,0.3)",
            accent: "rgba(251,160,36,0.3)"
        },
        colors: {
            accent: "#FBA024",
            footer: "#000137"
        },
        icon: {
            accent: "#c89743",
            secondary: "#247FFB",
            accentBackground: "rgba(200,151,67,0.1)",
            secondaryBackground: "rgba(36,127,251,0.1)"
        },
        mode: "dark",
    }
});

export const THEMES = {darkTheme, lightTheme};