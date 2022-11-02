import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../api/apiClient";

export const getAllbanners = createAsyncThunk(
  "mainBanners/banners",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainBannersSlice = createSlice({
  name: "banneres",
  initialState: {
    banners: {
      header: [],
      first_row: [],
      second_row: [],
    },
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(getAllbanners.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllbanners.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.status = "success";
      state.banners.header = data.header;
      state.banners.first_row = data.first_row;
      state.banners.second_row = data.second_row;
    });

    builder.addCase(getAllbanners.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const headerBanners = (state) => state.mainBannerReducer.banners.header;
export const firstBanners = (state) =>
  state.mainBannerReducer.banners.first_row;
export const secondBanners = (state) =>
  state.mainBannerReducer.banners.second_row;

export const bannersStatus = (state) => state.mainBannerReducer.status;

export default mainBannersSlice.reducer;
