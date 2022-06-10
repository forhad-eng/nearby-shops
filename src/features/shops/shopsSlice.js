import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
    name: 'shop-list',
    initialState: { shops: [] },
    reducers: {
        showAllShops: state => state.shops,
        addShop: (state, action) => {
            state.shops = [...state.shops, action.payload]
        }
    }
})

export const { showAllShops, addShop } = shopSlice.actions
export default shopSlice.reducer
