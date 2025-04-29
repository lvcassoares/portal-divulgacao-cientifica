// src/pages/Articles.js
import React from 'react';

const Articles = () => {
  return (
    <div className="main-content">
      <h1>Artigos</h1>

      <article className="scientific-article">
        <h2>Entendendo os Fundamentos do React</h2>
        <p className="meta">Autor: João Silva — 2025</p>
        <p className="abstract">
          <strong>Resumo:</strong> React é uma popular biblioteca JavaScript para construção de interfaces de usuário. 
          Este artigo aborda os conceitos centrais, como componentes, propriedades, estado e como esses elementos 
          interagem para criar aplicações dinâmicas.
        </p>
      </article>

      <article className="scientific-article">
        <h2>Como Funcionam os Sites na Web</h2>
        <p className="meta">Autora: Maria Souza — 2025</p>
        <p className="abstract">
          <strong>Resumo:</strong> Os sites são construídos utilizando o modelo cliente-servidor, onde navegadores 
          se comunicam com servidores através do protocolo HTTP. Este artigo explica os papéis fundamentais do HTML, 
          CSS, JavaScript e dos servidores web no funcionamento dos sites.
        </p>
      </article>

      <article className="scientific-article">
        <h2>O que são Git e GitHub?</h2>
        <p className="meta">Autor: Pedro Almeida — 2025</p>
        <p className="abstract">
          <strong>Resumo:</strong> Git é um sistema de controle de versões distribuído, enquanto GitHub é uma 
          plataforma de hospedagem de repositórios Git. Este artigo descreve os conceitos básicos de versionamento 
          e como essas ferramentas colaboram para o desenvolvimento de software.
        </p>
      </article>
    </div>
  );
}

export default Articles;
