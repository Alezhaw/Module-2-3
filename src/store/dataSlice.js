import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    products: [],
    uniqueBrand: [],
    copyUniqueBrand: [],
    priceMin: '0',
    priceMax: '10000',
    userName: []
  },
  reducers: {

    setProductsState: (state, action) => {
        state.products = action.payload;
    },
    setUniqueBrandState: (state, action) => {
        state.uniqueBrand = action.payload;
    },
    setCopyUniqueBrandState: (state, action) => {
        state.copyUniqueBrand = action.payload;
    },
    setPriceMinState: (state, action) => {
        state.priceMin = action.payload;
    },
    setPriceMaxState: (state, action) => {
        state.priceMax = action.payload;
    },
    setUserNameState: (state, action) => {
        state.userName = action.payload;
    }



  },
})

export const {setProductsState, setUniqueBrandState, setCopyUniqueBrandState, setPriceMinState, setPriceMaxState, setUserNameState} = dataSlice.actions

export default dataSlice.reducer