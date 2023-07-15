import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "walletDetails",
  initialState: {
    loading: false,
    walletAssets: [],
    tokenProfile: {},
    error: "",
  },
  reducers: {
    getWalletProfile: (state) => {
      state.loading = true;
    },
    getWalletProfileSuccess: (state, { payload }) => {
      state.loading = false;
      if (payload?.result?.length) {
        state.walletAssets = payload.result;
      }
    },
    getWalletProfileFailed: (state) => {
      state.loading = false;
      state.walletAssets = [];
    },
    getTokenProfile: (state) => {
      state.loading = true;
    },
    getTokenProfileSuccess: (state, { payload }) => {
      state.loading = false;
      if (payload) {
        const { result, addressHash } = payload;
        const filteredResult = state.walletAssets.filter(
          (item) => item.contractAddress === addressHash
        );
        const tokenProfile = { result: result, ...filteredResult[0] };
        state.tokenProfile = tokenProfile;
      }
    },
    getTokenProfileFailed: (state) => {
      state.loading = false;
      state.tokenProfile = {};
    },
  },
});

export const {
  getWalletProfile,
  getWalletProfileSuccess,
  getWalletProfileFailed,
  getTokenProfile,
  getTokenProfileSuccess,
  getTokenProfileFailed,
} = slice.actions;

export default slice.reducer;
