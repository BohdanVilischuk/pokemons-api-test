const Filter = ({select, selects, handleChange}) => {
    return (
        <div className='pokemon-filter'>
            <select onChange={handleChange} value={select.value}>
                {selects && selects.map(({label, value}, index) => {
                    return <option key={index} value={value}>{label}</option>
                })}
            </select>
        </div>
    );
}

export default Filter;
