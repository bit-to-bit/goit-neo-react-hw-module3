import css from './SearchBox.module.css';
import clsx from 'clsx';
const searchBox = ({ onChange, inputValue }) => {
  return (
    <div className={clsx(css.searchBox, 'container')}>
      <label htmlFor='search'>Find contacts by name</label>
      <input
        type='text'
        id='search'
        placeholder='Search...'
        value={inputValue}
        onChange={event => onChange(event.target.value)}
      ></input>
    </div>
  );
};

export default searchBox;
