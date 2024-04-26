import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
    createSelector
} from '@reduxjs/toolkit';


export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const res = await fetch("http://localhost:4000/products");
        return await res.json();
    },
)

const productsAdapter = createEntityAdapter({});

export const {
    selectIds: selectProductsIds,
    selectById: selectProductById,
    selectAll: selectAllProducts,
} = productsAdapter.getSelectors(state => state.products);

export const selectProduct = createSelector(
    state => state.products.entities,
    (entities, id) => id,
    (entities, id) => entities[id],
);

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