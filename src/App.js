import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getPosts } from './store/entities/Posts';
import { Paginator, SearchInput, FormTable } from './components';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST APP</h1>
      </header>
      <div className="App-body">
        <SearchInput />
        <Switch>
          <Route path="/posts" component={FormTable} />
          <Redirect to="/posts" />
        </Switch>
      </div>
      <Paginator />
    </div>
  );
}

export default App;