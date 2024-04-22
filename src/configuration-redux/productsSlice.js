import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';


export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const res = await fetch("http://localhost:4000/products");
        return await res.json();
    },
)

const productsAdapter = createEntityAdapter({});

const productsSlice = createSlice({
    name: 'product',
    initialState: productsAdapter.getInitialState(),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                productsAdapter.addMany(state, action.payload)
            })
    },
});

export default productsSlice.reducer;