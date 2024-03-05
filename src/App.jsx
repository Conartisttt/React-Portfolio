// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
// import MatrixCode from './components/MatrixCode'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <Header/>
    {/* <MatrixCode/> */}
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
