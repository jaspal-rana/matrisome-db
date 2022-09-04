import Blog from './components/Blog';
import Search from './components/Search';
import './App.css';
import { useState } from 'react';

function App() {
  const [section, setSection] = useState('search')

  const handleClick = (selectedSection) => {
    setSection(selectedSection)
  }

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={() => { handleClick('search') }}>Search</button>
          <button onClick={() => { handleClick('about') }}>About</button>
          <button onClick={() => { handleClick('publications') }}>Publications</button>
          <button onClick={() => { handleClick('tutorial') }}>Tutorial</button>
          <button onClick={() => { handleClick('tools') }}>Tools</button>
          <button onClick={() => { handleClick('submit_your_data') }}>Submit Your Data</button>
          <br />
          <br />
        </div>
      </div>
      {
        section !== 'search' ? <Blog section={section} /> : <Search />
      }
    </div>
  );
}

export default App;
