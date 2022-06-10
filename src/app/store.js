import { configureStore } from '@reduxjs/toolkit'
import shopsSlice from '../features/shops/shopsSlice'

const store = configureStore({
    reducers: {
        shopReducer: shopsSlice
    }
})

export default store
