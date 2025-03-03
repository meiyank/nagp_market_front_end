import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
    searchProducts: [],
    searchProductsStatus: STATUS.IDLE
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        clearSearch: (state, action) => {
            state.searchProducts = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncSearchProduct.pending, (state, action) => {
            state.searchProductsStatus = STATUS.LOADING;
        })

        .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
            state.searchProducts = action.payload;
            state.searchProductsStatus = STATUS.SUCCEEDED;
        })

        .addCase(fetchAsyncSearchProduct.rejected, (state, action) => {
            state.searchProductsStatus = STATUS.FAILED;
        })
    }
})

export const fetchAsyncSearchProduct = createAsyncThunk('product-search/fetch', async(searchTerm) => {
    const response = await fetch(`${BASE_URL}/api/v1/elasticsearch/products/autoSuggest/${searchTerm}`,{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    console.log("fetching search product")
    console.log(data);
    return data;
});

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProducts;
export const getSearchProductsStatus = (state) => state.search.searchProductsStatus;
export default searchSlice.reducer;