import {createSlice} from '@reduxjs/toolkit';
import {addNote} from './NotesSlice';

const initialState = {
  title: '',
  description: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeTitle(state, action) {
      // payload = e.target.value
      state.title = action.payload;
    },
    changeDescription(state, action) {
      // payload = e.target.value
      state.description = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addNote, (state, option) => {
      (state.title = ''), (state.description = '');
    });
  },
});

export const formReducer = formSlice.reducer;
export const {changeTitle, changeDescription} = formSlice.actions;
