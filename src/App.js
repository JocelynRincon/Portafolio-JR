import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home';
import Proyects from './components/Proyects';
import Skills from './components/Skills';

  function App() {
     return (
     <div className="App">
     <Header/>
     <Home/>
     <br/>
     <Proyects/>
     <Skills/>
     <Footer/>
  

   
    </div>
  
     );
    }
   export default App;

// function App() {
//      return( 
//  <div className='App' >
//     <Header/>
//     <Routes> 
//         <Route  path="/about" element={<Home/>}/>
//          <Route path="/Proyects" element={<Proyects/>} />
//          <Route path="/habilidades" element={<Skills/>}/>
//         <Route  path="/footer" element={<Footer/>}/>
   
//  </Routes>
//  </div>
//   );
//  }
//  export default App;