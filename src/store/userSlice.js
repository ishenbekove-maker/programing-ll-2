import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Erkin",
  age: 20,
  group: "IT-124",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
