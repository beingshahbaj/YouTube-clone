// logoslice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "AIzaSyBzSTXIrBHXKoQPLmhHTeGL87z-DyGUYBY";

export const fetchLogo = createAsyncThunk(
  "logo/fetchLogo",
  async (channelId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
      );
      const logoUrl = response.data.items[0].snippet.thumbnails.default.url;
      console.log(response.data);
      return { channelId, logoUrl };
    } catch (error) {
      throw new Error("Failed to fetch logo.");
    }
  }
);

const logoSlice = createSlice({
  name: "logo",
  initialState: {
    logos: {}, // Object to store logo data { channelId: logoUrl }
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogo.fulfilled, (state, action) => {
        state.loading = false;
        state.logos[action.payload.channelId] = action.payload.logoUrl;
      })
      .addCase(fetchLogo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default logoSlice.reducer;
