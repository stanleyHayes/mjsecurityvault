import {createSlice} from "@reduxjs/toolkit";
import {reviews} from "./reviews";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        reviews: [...reviews],
        reviewLoading: false,
        reviewError: null
    },
    reducers: {}
});

const {reducer} = reviewSlice;
export const selectReviews = state => state.reviews;

export default reducer;