import "./style/searchBar.css"

const SearchBar = ({search, setSearch}) => {

  const handleSearch = (e)=>{
    e.preventDefault()
    setSearch(e.target.value)
    setSearch('')
    

  }
  return (
    <form className='SearchBar' onSubmit={handleSearch}>
      <label htmlFor='searchBar'>Search names...</label>
      <input
        type="text"
        id='searchBar'
        placeholder='Search for a conversation...'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
