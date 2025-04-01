import {configureStore} from "@reduxjs/toolkit";

import uiReducer from "./../features/ui/ui-slice";
import faqsReducer from "./../features/faqs/faqs-slice.js";
import reviewsReducer from "./../features/reviews/reviews-slice.js";
import consignmentReducer from "../features/consignment/consignment-slice.js";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        faqs: faqsReducer,
        reviews: reviewsReducer,
        consignments: consignmentReducer,
    },
    devTools: true
});

export default store;