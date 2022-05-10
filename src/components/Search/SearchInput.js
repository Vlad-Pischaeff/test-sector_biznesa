import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkPosts } from '../../store/entities/Posts';
import './style.css';

function SearchInput() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.entities);
  const [ input, setInput ] = useState('');

  // ...check posts on input change
  useEffect(() => {
    dispatch(checkPosts({ testStr: input }));
  }, [input, dispatch]);

  // ...set Number of pages after loading all posts on start
  useEffect(() => {
    posts.state ==='fullfiled' && dispatch(checkPosts({ testStr: '' }));
  }, [posts.state])

  const handlerOnChange = e => {
    setInput(e.target.value);
  }

  return (
    <input className="search" placeholder="Поиск" type="text" onChange={handlerOnChange} />
  );
};

export default SearchInput;