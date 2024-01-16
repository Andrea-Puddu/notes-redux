import {Link} from 'react-router-dom';
import {PlusIcon} from '@heroicons/react/24/outline';

import SearchForm from '../components/SearchForm';
import NotesWrapper from '../components/NotesWrapper';

const Notes = () => {
  return (
    <>
      <header className='flex-center gap-8 mb-8'>
        <h1>Notes</h1>
        <SearchForm />
      </header>

      <NotesWrapper />

      <Link
        to='/create-note'
        className=' z-10 fixed bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-5 bg-indigo-50 text-content-black rounded-full shadow-lg
        hover:bg-indigo-100 active:bg-indigo-200 duration-150'
      >
        <PlusIcon className=' w-7 h-7 ' />
      </Link>
    </>
  );
};

export default Notes;
