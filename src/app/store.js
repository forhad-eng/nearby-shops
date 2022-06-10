import { configureStore } from '@reduxjs/toolkit'
import shopsSlice from '../features/shops/shopsSlice'

const store = configureStore({
    reducer: {
        shopReducer: shopsSlice
    }
})

export default store
