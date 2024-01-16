import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {useSelector, useDispatch} from 'react-redux';
import {changeSearchTerm} from '../store';

const SearchForm = () => {
  const searchTerm = useSelector((state) => state.notes.searchTerm);
  const dispatch = useDispatch();

  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className='relative max-w-xs'>
      <MagnifyingGlassIcon className='absolute top-0 bottom-0 left-3 w-6 h-6 my-auto text-content ' />
      <input
        value={searchTerm}
        onChange={handleSearchTermChange}
        type='text'
        placeholder='Search Task...'
        className='w-full py-1 pl-12 pr-4 border rounded-lg outline-none  text-content bg-gray-50 focus:bg-white focus:border-secondary'
      />
    </div>
  );
};

export default SearchForm;
