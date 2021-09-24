import './App.scss';
import Title from './components/title';
import {useEffect, useState} from 'react';
import {getPokemons} from './helpers/api';
import PokemonBox from './components/pokemon-box';
import {mapSelectItems} from './helpers/functions';
import PokemonPreview from './components/pokemon-preview';
import Filter from "./components/filter";

export const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState(null);
  const [select, setSelect] = useState({value: 'all'});
  const [page, setPage] = useState(12);
  const [box, setBox] = useState(true);

  const loadMore = () => {
    setPage(page => page + 12);
  }
  const options = [{
    id: 0,
    label: 'all',
    value: 'all'
  }]

  const selects = [...options, ...mapSelectItems(allPokemons)];

  useEffect(() => {
    getPokemons(page, setAllPokemons);
  }, [page]);
  const openBox = () => {
    setBox(true)
  }
  const closeBox = () => {
    setBox(false)
  }
  const highlightPokemonHandler = (name, id, stats, weight, moves, image, type) => {
    openBox()
    setSinglePokemon({
      name: name,
      id: id,
      stats: stats,
      weight: weight,
      moves: moves,
      image: image,
      type: type
    });
  };

  const handleSelectChange = (e) => {
    setSelect({value: e.target.value});
  };

  const items =
    select.value === 'all' ? allPokemons : allPokemons.filter(({type}) => {
      return type[0].includes(select.value);
    });

  return (
    <div className='container'>
      <Title/>
      <Filter selects={selects} select={select} handleChange={handleSelectChange}/>
      <div className='pokemons'>
        <div className='content'>
          <div className='all-pokemons'>
            {items && items.map(({type, image, name, weight, id, stats, moves}, index) => {
                return <PokemonBox
                  pokemonHandler={highlightPokemonHandler}
                  image={image}
                  type={type}
                  name={name}
                  weight={weight}
                  id={id}
                  moves={moves}
                  stats={stats}
                  key={index}
                />
              }
            )}
          </div>
          <div className='load-more' onClick={loadMore}>
            Load more
          </div>
        </div>
        <div className='pokemon-preview__container'>
          {singlePokemon && box && (
            <PokemonPreview
              closeBox={closeBox}
              weight={singlePokemon.weight}
              name={singlePokemon.name}
              id={singlePokemon.id}
              moves={singlePokemon.moves}
              stats={singlePokemon.stats}
              image={singlePokemon.image}
              type={singlePokemon.type}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
