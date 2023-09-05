import './Search.css';

function Search({searchValue, setSearchValue}) {

  return (
    <div className='search'>
      <span></span>
      <input 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
        type='text' 
        placeholder='search...'/>
    </div>
  )
}

export {Search}