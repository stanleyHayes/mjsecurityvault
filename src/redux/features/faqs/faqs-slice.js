import {createSlice} from "@reduxjs/toolkit";
import {faqs} from "./faqs";

const faqSlice = createSlice({
    name: "faq",
    initialState: {
        faqs: [...faqs],
        faqLoading: false,
        faqError: null
    },
    reducers: {}
});

const {reducer} = faqSlice;
export const selectFAQs = state => state.faqs;

export default reducer;