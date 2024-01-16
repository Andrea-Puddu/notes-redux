import {Link, useNavigate} from 'react-router-dom';
import {ChevronLeftIcon} from '@heroicons/react/24/outline';
import {useDispatch, useSelector} from 'react-redux';

import CreateNoteForm from '../components/CreateNoteForm';
import {addNote} from '../store';

const CreateNote = () => {
  const {title, description} = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    dispatch(addNote({title, description}));
    navigate('/');
  };

  return (
    <>
      <header className='flex-center gap-8 mb-14'>
        <Link
          to='/'
          className='inline-block rounded-xl p-4 bg-gray-700 text-content-white hover:bg-gray-600 transition'
          href='/download'
        >
          <ChevronLeftIcon className='w-6 h-6' />
        </Link>
        <button
          onClick={handleFormSubmit}
          className='inline-block rounded-xl py-4 px-5 text-content-white text-lg tracking-wide font-semibold  bg-gray-700 hover:bg-gray-600 transition '
        >
          Save
        </button>
      </header>

      <CreateNoteForm title={title} description={description} handleFormSubmit={handleFormSubmit} />
    </>
  );
};

export default CreateNote;
