import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CONSIGNMENT_API} from "../../../api/consignment.api.js";


const getConsignment = createAsyncThunk('consignment/getConsignment',
    async ({consignments_serial_numbers, vault_number}, {rejectWithValue}) => {
        try {
            const response = await CONSIGNMENT_API.getConsignment(consignments_serial_numbers, vault_number);
            console.log(response.data);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });


const consignmentSlice = createSlice({
    name: "consignments",
    initialState: {
        consignment: null,
        consignmentLoading: false,
        consignmentError: null
    },
    extraReducers: builder => {
        builder.addCase(getConsignment.pending, (state) => {
            state.consignmentLoading = true;
            state.consignmentError = null;
        }).addCase(getConsignment.fulfilled, (state, action) => {
            state.consignmentLoading = false;
            state.consignmentError = null;
            state.consignment = action.payload.data;
        }).addCase(getConsignment.rejected, (state, action) => {
            state.consignmentLoading = false;
            state.consignmentError = action.payload;
            state.shipment = null
        })
    },
    reducers: {}
});

const {reducer} = consignmentSlice;
export const selectConsignments = state => state.consignments;

export const CONSIGNMENT_ACTION_CREATORS = {
    getConsignment,
};
export default reducer;