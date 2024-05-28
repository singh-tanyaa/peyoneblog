const { createSlice } = require("@reduxjs/toolkit");
const initialState = {atReviewer:[],atWriter:[]}
const roleSlice = createSlice({
  name: "roles",
  initialState: [],
  reducer: { authorizeReviewer: (action, payload) => {},authorizeWriter: (action, payload) => {}}
});
