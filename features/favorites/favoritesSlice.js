import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (favorites, action) => {
            // If the campsite is already in the favorites array, remove it
            if (favorites.includes(action.payload)) {
                // Return a new array
                return favorites.filter(
                    (favorite) => favorite !== action.payload
                );
            } else {
                // Else add it
                // Modify the existing array.  Redux toolkit will detect this change and 
                // create of a new array behind the scenes
                favorites.push(action.payload);
            }
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;