const PokemonPreview = ({stats, name, id, weight, moves, type, image, closeBox}) => {
  return (
    <div className={name ? 'pokemon-preview' : 'preview-hidden'}>
      <div className='single-pokemon__wrapper'>
        <div onClick={closeBox} className='close'></div>
        <picture className='single-pokemon__image'>
          <img src={image} alt='single-pokemon'/>
        </picture>
        <div className='single-pokemon__header'>
          <h3 className='single-pokemon__title'>
            {name}
          </h3>
          <span className='single-pokemon__id'>
            ##{id}
          </span>
        </div>
        <div className='single-pokemon__types'>
          <h4>
            Types:
          </h4>
          {type.map((type, index) => (
            <div key={index * 1.2} className={`pokemon-type ${type}`}>
              {type}
            </div>
          ))}
        </div>
        {stats && (
          <div className='single-pokemon__content'>
            <div className='single-pokemon__ability-group'>
              <div className='single-pokemon__ability-name'>
                {stats && stats.name.map((ability, index) =>
                  <div key={index * 2.223} className='single-pokemon__item'>{ability}:</div>
                )}
              </div>
              <div className='single-pokemon__ability-value'>
                {stats && stats.value.map((value, index) =>
                  <div key={index * 1.256} className='single-pokemon__item'>{value}</div>
                )}
              </div>
            </div>
            <div className='single-pokemon__ability-group'>
              <div className='single-pokemon__item'>
                Weight:
              </div>
              <div className='single-pokemon__item'>
                {weight}
              </div>
            </div>
            <div className='single-pokemon__ability-group'>
              <div className='single-pokemon__item'>Total moves:</div>
              <div className='single-pokemon__item'>{moves.length}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonPreview;
