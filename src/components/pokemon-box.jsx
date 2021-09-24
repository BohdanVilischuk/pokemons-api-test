const PokemonBox = ({name, image, type, id, stats, pokemonHandler, weight, moves}) => {
    return (
        <div className="pokemon-box" onClick={() => pokemonHandler(name, id, stats, weight, moves, image, type)}>
            <picture>
                <img src={image} alt='pokemon'/>
            </picture>
            <div className='box-content'>
               <h4>
                   {name}
               </h4>
            </div>
            <div className='pokemon-types'>
                {type.map(item => (
                    <div className={`pokemon-type ${item}`} key={item}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default PokemonBox;
