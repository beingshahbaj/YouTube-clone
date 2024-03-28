import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "AIzaSyBzSTXIrBHXKoQPLmhHTeGL87z-DyGUYBY";
// const API_KEY = "AIzaSyDa95KzoCkJIH-3CILO7QsE67ufMF7bkLM";
// const API_KEY = "AIzaSyD8O_WLqEMxyxPXQzgKQo6taUE2REbw5Wk";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const data = async (searchQuery, maxResults) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`
    );
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching data:", error.message);
  }
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return data("JavaScript Tutorial", 10);
});

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    loading: "false",
    data: [],
    error: null,
  },
  Reducer: {},

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = "true";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      (state.loading = "false"),
        (state.data = action.payload),
        (state.error = null);
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      (state.loading = "false"),
        (state.data = []),
        (state.error = action.error.message);
    });
  },
});

export default youtubeSlice.reducer;
