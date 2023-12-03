export const ContactForm = () => {
  return (
    <form
      className='flex flex-col w-[80%]'
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor='name' className='font-semibold'>
        Name
      </label>
      <input
        type='text'
        id='name'
        placeholder='What is your name?'
        className='py-2 px-4 outline-none rounded-md mt-2 mb-4'
      />
      <label htmlFor='email' className='font-semibold'>
        Email
      </label>
      <input
        type='email'
        id='email'
        placeholder='What is your email?'
        className='py-2 px-4 outline-none rounded-md mt-2 mb-4'
      />

      <label htmlFor='message' className='font-semibold'>
        Message
      </label>
      <textarea
        id='message'
        rows={5}
        cols={12}
        placeholder='What is on your mind?'
        className='py-2 px-4 outline-none rounded-md mt-2 mb-4'
      />

      <button
        type='submit'
        className='bg-activeText py-2 rounded-md text-white'
      >
        Send
      </button>
    </form>
  );
};
