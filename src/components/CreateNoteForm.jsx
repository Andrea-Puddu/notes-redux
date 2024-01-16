import {useDispatch} from 'react-redux';
import {changeDescription, changeTitle} from '../store';

const CreateNoteForm = ({title, description, handleFormSubmit}) => {
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    dispatch(changeTitle(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(changeDescription(e.target.value));
  };

  return (
    <form onSubmit={handleFormSubmit} className=' flex flex-col gap-1'>
      <input
        value={title}
        onChange={handleTitleChange}
        type='text'
        autoFocus
        placeholder='Title'
        className='  py-5 px-4 bg-transparent text-4xl sm:text-5xl focus:outline-none'
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder='Type somenthing...'
        rows='8'
        className=' py-4 px-4 bg-transparent text-base/relaxed xl:text-lg/relaxed resize-none no-scrollbar focus:outline-none'
      />
    </form>
  );
};

export default CreateNoteForm;
