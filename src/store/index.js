import { configureStore } from '@reduxjs/toolkit'
import donutsReducer from './donuts/donutsSlice'
import favouritesReducer from './favourites/favouritesSlice'

export const store = configureStore({
  reducer: {
    donuts: donutsReducer,
    favourites: favouritesReducer
  }
})





