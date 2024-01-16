import {Link} from 'react-router-dom';

const Note = ({note: {title, date, id}, index}) => {
  return (
    <Link
      to={`/edit-note/${id}`}
      className={`bg-primary py-3 px-5 flex flex-col gap-3 justify-between rounded-lg hover:scale-105 transition-all first:bg-blue-200 
      ${(index + 1) % 3 === 0 && ' bg-pink-300'}
      ${index === 2 && 'col-span-2'} 
      ${index === 3 && ' row-start-3 row-end-5 bg-purple-300'} 
      ${index === 6 && 'col-span-2'}   `}
    >
      <h3 className=' '>{title.length > 35 ? title.substr(0, 35) + ' ...' : title}</h3>
      <p className=' text-content text-sm'>{date}</p>
    </Link>
  );
};

export default Note;
