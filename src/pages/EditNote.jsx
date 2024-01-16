import {Link, useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {editNote, deleteNote} from '../store';
import {ChevronLeftIcon, TrashIcon} from '@heroicons/react/24/outline';
import EditNoteForm from '../components/EditNoteForm';

const EditNote = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.notes);
  const note = data.find((note) => id === note.id);

  const [termTitle, setTermTitle] = useState(note.title);
  const [termDescription, setTermDescription] = useState(note.description);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!termTitle || !termDescription) return;
    dispatch(editNote({id, title: termTitle, description: termDescription}));
    navigate('/');
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote(id));
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
          Edit
        </button>
        <button
          onClick={handleDeleteNote}
          className='inline-block rounded-xl py-4 px-5 text-content-white text-lg tracking-wide font-semibold  bg-red-700 hover:bg-red-600 transition '
        >
          <TrashIcon className=' w-6 h-6' />
        </button>
      </header>

      <EditNoteForm
        termTitle={termTitle}
        setTermTitle={setTermTitle}
        termDescription={termDescription}
        setTermDescription={setTermDescription}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default EditNote;
