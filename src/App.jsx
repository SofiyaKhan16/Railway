import Pages from '../src/Components/Pages'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";



function App() {
  return (
    <div className='w-screen h-full '>
      <div className='h-full overflow-scroll w-full'>
        < Pages />
      </div>
      
      <BrowserRouter>
        <Link to="#home"></Link>
        <Link to="#service"></Link>
        <Link to="#about"></Link>
        {/* <Link to="#career"></Link> */}
        <Link to="#contact"></Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
