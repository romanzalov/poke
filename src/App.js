import { Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { getInitialPokemon, getRandomPokemon, setFetchStatus } from "./redux";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard";

function App({
  pokemon,
  getRandomPokemon,
  getInitialPokemon,
  fetchingRandomPokemon,
  setFetch,
}) {
  useEffect(() => {
    getInitialPokemon();
  }, []);

  return (
    <div>
      <div className="navBar sticky">
        <h1>Pokemon Finder</h1>
        <Button
          onClick={() => {
            setFetch();
            getRandomPokemon();
          }}
          disabled={fetchingRandomPokemon}
        >
          Get Random Pokemon{" "}
          {fetchingRandomPokemon && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </Button>
      </div>

      <div className="container">
        {pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard
              height={pokemon.height}
              weight={pokemon.weight}
              backImage={pokemon.sprites.back_default}
              frontImage={pokemon.sprites.front_default}
              name={pokemon.name}
              baseExperience={pokemon.base_experience}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  fetchingRandomPokemon: state.fetchStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getInitialPokemon: () => dispatch(getInitialPokemon()),
  getRandomPokemon: () => dispatch(getRandomPokemon()),
  setFetch: () => dispatch(setFetchStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
