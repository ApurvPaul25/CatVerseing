// import { counterSlice } from './slices/counter/counterSlice' 
// works on typescript as typehoooks also get defined and initalized
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'

export const store = configureStore({
    reducer:{
        // counter: counterSlice, // wroks only in typescript
        counter: counterReducer
    }
})


