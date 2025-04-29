import React from 'react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
      <div className='about-container'>
        <h1>Sobre</h1>
        <p>Projeto desenvolvido para demonstrar a implementação de um simples portal de divulgação científica.</p>
        <p>
        Acesse meu github: 
        <a 
          href="https://github.com/lvcassoares" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center' }}
        >
          <FaGithub size={24} />
        </a>
      </p>
      </div>
    )
  }

export default About
  