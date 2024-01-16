const EditNoteForm = ({
  termTitle,
  setTermTitle,
  termDescription,
  setTermDescription,
  handleFormSubmit,
}) => {
  return (
    <form onSubmit={handleFormSubmit} className=' flex flex-col gap-1'>
      <input
        value={termTitle}
        onChange={(e) => setTermTitle(e.target.value)}
        type='text'
        autoFocus
        placeholder='Title'
        className='  py-4 px-4 bg-transparent text-4xl sm:text-5xl  focus:outline-none'
      />
      <textarea
        value={termDescription}
        onChange={(e) => setTermDescription(e.target.value)}
        placeholder='Type somenthing...'
        rows='8'
        className=' py-5 px-4 bg-transparent text-base/relaxed xl:text-lg/relaxed resize-none no-scrollbar focus:outline-none'
      />
    </form>
  );
};

export default EditNoteForm;
