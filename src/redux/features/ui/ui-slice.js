import {createSlice} from "@reduxjs/toolkit";
import {MJ_SECURITY_VAULT_CONSTANTS} from "../../../utils/constants";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: localStorage.getItem(MJ_SECURITY_VAULT_CONSTANTS.MJ_SECURITY_VAULT_THEME_VARIANT_KEY) ?
            localStorage.getItem(MJ_SECURITY_VAULT_CONSTANTS.MJ_SECURITY_VAULT_THEME_VARIANT_KEY) :
            "dark",
        drawerOpen: false
    },
    reducers: {
        toggleDrawer: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleTheme: (state) => {
            localStorage.setItem(MJ_SECURITY_VAULT_CONSTANTS.MJ_SECURITY_VAULT_THEME_VARIANT_KEY, state.theme === "light" ? "dark" : "light")
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

const {reducer, actions} = uiSlice;
export const selectUI = state => state.ui;
export const UI_ACTION_CREATORS = {
    toggleDrawer: actions.toggleDrawer,
    toggleTheme: actions.toggleTheme,
};

export default reducer;