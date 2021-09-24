import Image from "./image";
import Type from "./type";

const PokemonBox = ({name, image, type, id, stats, pokemonHandler, weight, moves}) => {
    return (
        <div className="pokemon-box" onClick={() => pokemonHandler(name, id, stats, weight, moves, image, type)}>
            <Image src={image} alt='pokemon'/>
            <div className='box-content'>
               <h4>
                   {name}
               </h4>
            </div>
            <div className='pokemon-types'>
                {type.map((item, index) => (
                    <Type key={index} type={item}/>
                ))}
            </div>
        </div>
    );
}

export default PokemonBox;
