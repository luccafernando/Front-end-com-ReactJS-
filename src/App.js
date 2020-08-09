import React, { useState } from 'react';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {

        setProjects([...projects, `Novo projeto ${Date.now()}`])
    }

    return (
        <>     
          <Header title="Projects" />

          <ul>
            {projects.map(projects => <li key={projects}>{projects}</li>)}
          </ul>

          <button type="button" onClick={handleAddProject}>
              Adicionar projeto
          </button>
        </>
    );
    
}

export default App;