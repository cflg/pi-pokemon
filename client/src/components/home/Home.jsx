import "./Home.css";
import PokemonsContainer from "../pokemons-container/PokemonsContainer";
import Aside from "../aside/Aside";

const Home = () => {
  
  return (
    <div id="home-container">
      <Aside />
      <main>
        <PokemonsContainer />
      </main>
    </div>
  );
};

export default Home;
