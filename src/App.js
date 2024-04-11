import logo from './easyDietLogo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from 'react';
import './index.css';

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [perdaPeso, setPerdaPeso] = useState(false);
  const [melhoriaSaude, setMelhoriaSaude] = useState(false);
  const [ganhoMassaMuscular, setGanhoMassaMuscular] = useState(false);
  const [controleDoencas, setControleDoencas] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formulario = { nome, idade, sexo, peso, altura, perdaPeso, melhoriaSaude, ganhoMassaMuscular, controleDoencas, email };
    console.log(formulario);
  }

  return (
    <div className="App">
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </header>

      <AppBar position="fixed">
        <Toolbar className="nav-bar">
          <a href="#tela-inicio">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <div className='barBtn'>
            <Button href="#tela-sobre" color="inherit" >Sobre</Button>
            <Button href="#tela-formulario" color="inherit">Formulário</Button>
          </div>
        </Toolbar>
      </AppBar>

      <div id='tela-inicio' className='tela'>
        <div id='tela1-box'>
          <div id='titulo'>EasyDiet</div>
          <p id='texto-inicio'>Sua jornada para uma vida mais saudável começa aqui</p>
        </div>
      </div>

      <div id="tela-sobre" className="tela">
        <h1 id='titulo-sobre'>Bem-vindo ao EasyDiet</h1>
        <div id="texto-sobre">
          <div className='proposito-box'>
            <h2>Qual é o propósito?</h2>
            <br />
            <p>Nosso objetivo é facilitar a transição para uma dieta saudável, oferecendo uma solução personalizada para hábitos alimentares saudáveis. Queremos ajudá-lo a alcançar seus objetivos de saúde e bem-estar de maneira prática e sustentável.</p>
          </div>
          <div className='como-funciona-box'>
            <h2>Como funciona?</h2>
            <br />
            <p>O EasyDiet utiliza inteligência artificial para criar uma dieta personalizada com base nos seus objetivos de saúde e estilo de vida. Ao responder algumas perguntas simples sobre seus hábitos alimentares, preferências e metas, nossa IA projetará um plano alimentar sob medida para você.</p>
          </div>
          <div className='oque-diferencia-box'>
            <h2>O que nos diferencia?</h2>
            <br />
            <p>Nossos planos alimentares são totalmente adaptados às suas necessidades individuais, levando em consideração suas preferências alimentares, restrições dietéticas e objetivos de saúde. Com o EasyDiet você recebe uma dieta personalizada em instantes após o preenchimento de um formulário.</p>
          </div>
        </div>
      </div>

      <div id='tela-formulario' className='tela'>
        <div id='tela3-box'>
          <h1 id='titulo-formulario'>Formulário</h1>
          <div id='texto-formulario'>
            <p>O formulário levará apenas alguns minutos para ser preenchido, precisamos de algumas informações para montar sua dieta personalizada.</p>
          </div>
        </div>
        <div id='tela3-box-forms'>
          <form onSubmit={handleSubmit}>
            <label>Nome Completo: </label>
            <input type="text" id='nome' required value={nome} onChange={(e) => setNome(e.target.value)} />
            <label htmlFor="idade">Idade:</label>
            <input
              type="number"
              id="idade"
              name="idade"
              min="0"
              step="1"
              required
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" name="sexo" required value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
            <label htmlFor="peso">Peso (kg):</label>
            <input type="number" id="peso" name="peso" min="0" step="0.1" required value={peso} onChange={(e) => setPeso(e.target.value)} />
            <label htmlFor="altura">Altura (cm):</label>
            <input type="number" id="altura" name="altura" min="0" step="1" required value={altura} onChange={(e) => setAltura(e.target.value)} />
            <div id='objetivos'>
              <h2>Objetivos:</h2>
              <label>
                <input
                  type="checkbox"
                  name="perdaPeso"
                  onChange={(e) => setPerdaPeso(e.target.checked)}
                />
                Perda de peso
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="melhoriaSaude"
                  onChange={(e) => setMelhoriaSaude(e.target.checked)}
                />
                Melhoria da saúde
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="ganhoMassaMuscular"
                  onChange={(e) => setGanhoMassaMuscular(e.target.checked)}
                />
                Ganho de massa muscular
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="controleDoencas"
                  onChange={(e) => setControleDoencas(e.target.checked)}
                />
                Controle de doenças
              </label>
            </div>
            <label>Email: </label>
            <input type="text" id='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button id='form-btn'>Criar Dieta</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
