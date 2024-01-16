import {createSlice, nanoid} from '@reduxjs/toolkit';
import {getDate} from '../../constants';

const initialState = {
  searchTerm: '',
  data: JSON.parse(localStorage.getItem('notes')) || [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      // payload = e.target.value
      state.searchTerm = action.payload;
    },

    addNote(state, action) {
      // payload = {title, description}
      const newNote = {
        id: nanoid(),
        title: action.payload.title.trim(),
        description: action.payload.description.trim(),
        date: getDate(),
      };
      state.data.push(newNote);
    },

    editNote(state, action) {
      // payload = {id, title, description}
      const note = state.data.find((note) => note.id === action.payload.id);
      if (note) {
        note.title = action.payload.title;
        note.description = action.payload.description;
      }
    },

    deleteNote(state, action) {
      // payload = id
      const newData = state.data.filter((note) => note.id !== action.payload);
      state.data = newData;
    },
  },
});

export const notesReducer = notesSlice.reducer;
export const {changeSearchTerm, addNote, editNote, deleteNote} = notesSlice.actions;
