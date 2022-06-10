import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
    name: 'shopList',
    initialState: { shops: [] },
    reducers: {
        showAllShops: state => state.shops,
        addShop: (state, action) => {
            state.shops = [...state.shops, action.payload]
        },
        deleteShop: (state, action) => {
            state.shops = state.shops.filter(shop => shop.uid !== action.payload)
        }
    }
})

export const { showAllShops, addShop, deleteShop } = shopSlice.actions
export default shopSlice.reducer
