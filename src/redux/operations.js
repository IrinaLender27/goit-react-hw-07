import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65db8caa3ea883a15291e87f.mockapi.io";
export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async(contactId)
);
