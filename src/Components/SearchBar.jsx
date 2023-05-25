import { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    // Filter through each data set
    const newFilter = data.filter((value) => {
      // If the data set (title) includes the input word then return it
      //   Set them to lowercase so capitalization doesn't affect searches
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          onChange={handleFilter}
          value={wordEntered}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id='clearBtn' onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length != 0 && (
        <div className='dataResult'>
          {/* Slice the data to save on performance */}
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className='dataItem'
                href={value.link}
                rel='noreferrer'
                target='_blank'
                key={key}
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
