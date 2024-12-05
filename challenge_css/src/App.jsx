import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <>
    <h1>Detalhes do carros</h1>
      <CarDetails brand="Ford" km={0} color="Vermelho"/>
      <CarDetails brand="Ford" km={0} color="Azul"/>
      <CarDetails brand="Ford" km={0} color="Prata"/>
    
    </>
  );
}

export default App;
