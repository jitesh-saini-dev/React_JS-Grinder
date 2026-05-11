import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from '../Slice/Product'
import authSliceReducer from '../Slice/authSlice'

export const Store = configureStore ({

    reducer :{

        product : ProductReducer,
        auth : authSliceReducer

    }
})
export default Store