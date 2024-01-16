import {useSelector} from 'react-redux';
import Note from './Note';
import {useEffect} from 'react';

const NotesWrapper = () => {
  const {searchTerm, data} = useSelector((state) => state.notes);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(data));
  }, [data]);

  const filteredNotes = data.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderedNotes = filteredNotes.map((note, index) => (
    <Note key={note.id} note={note} index={index} />
  ));

  return <div className=' w-full grid grid-cols-2 gap-8 '>{renderedNotes}</div>;
};

export default NotesWrapper;
