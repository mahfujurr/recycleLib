import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      {/* <Toaster></Toaster> */}
    </div>
    </div>
  );
}

export default App;
