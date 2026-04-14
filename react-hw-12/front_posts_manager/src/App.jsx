import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (

    <>
      <Toaster position="top-center" reverseOrder={false} />
      <button onClick={() => toast.success('Перевірка!')}>Натисни мене</button>
      <PostsPage />
    </>
  );
}

export default App;



