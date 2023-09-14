import { useContext } from 'react';
import './Search.css';
import { TaskContext } from '../App/TaskContext';

function Search() {

  const {searchValue, setSearchValue} = useContext(TaskContext)

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