import {configureStore} from '@reduxjs/toolkit';

import {formReducer, changeTitle, changeDescription} from './slices/formSlice';
import {notesReducer, changeSearchTerm, addNote, editNote, deleteNote} from './slices/NotesSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    notes: notesReducer,
  },
});

export {store, changeTitle, changeDescription, changeSearchTerm, addNote, editNote, deleteNote};
