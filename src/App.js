import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import StudentsList from './components/StudentList/StudentsList';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    line_linked: {
      color: "rgb(65, 65, 92)"
    },
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <StudentsList />
      <div className="particle">
        <Particles className='particles'
            params={particlesOptions} 
        />
      </div>
    </div>
  );
}

export default App;