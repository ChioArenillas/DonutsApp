import { createSlice } from "@reduxjs/toolkit";
import {
    fetchDonuts,
    fetchDonutById,
    createDonut,
    updateDonut,
    deleteDonut
} from './donutsThunks';

const initialState= {
    list: [],
    selected: null,
    loading: false,
    error: null
}

const donutsSlice= createSlice({
    name: 'donuts',
    initialState,
    reducers: {
        clearSelectedDonut: (state) => {
            state.selected = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDonuts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchDonuts.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload.data || action.payload || []
        })
        .addCase(fetchDonuts.rejected, (state, action) =>{
            state.loading= false
            state.error = action.error.message
        })
        .addCase(fetchDonutById.fulfilled, (state, action) => {
            state.selected = action.payload
        })
        .addCase(createDonut.fulfilled, (state, action) => {
            state.list.push(action.payload)
        })
        .addCase(updateDonut.fulfilled, (state, action) => {
            const index = state.list.findIndex(d => d.donutId === action.payload.donutId)
            if (index !== -1) state.list[index] = action.payload
            state.selected = action.payload
        })
        .addCase(deleteDonut.fulfilled, (state, action) => {
            state.list = state.list.filter(d => d.donutId !== action.payload)
        })
    }
})

export const { clearSelectedDonut } = donutsSlice.actions
export default donutsSlice.reducer