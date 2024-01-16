import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';

import {useSelector} from 'react-redux';

const App = () => {
  return (
    <main className=' app-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/create-note' element={<CreateNote />} />
          <Route path='/edit-note/:id' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
