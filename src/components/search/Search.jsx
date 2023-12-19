
const Search = ({val, onSearch,...props})=>{
  return(
    <input 
    className="form-control"
    value={val}
    onChange={onSearch}
    placeholder="Posto pavadinimas"
    />
    
  )
}

export default Search