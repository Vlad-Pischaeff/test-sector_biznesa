import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/entities/Pages';

function PageBackward() {
  const dispatch = useDispatch();
  const { pages } = useSelector(state => state.entities);

  const goBackward = () => {
    pages.currentPage === 1
      ? dispatch(setCurrentPage({ currentPage: pages.pages }))
      : dispatch(setCurrentPage({ currentPage: pages.currentPage - 1 }));
  }

  return (
    <div onClick={goBackward}>
      <Link className="App-footer_dir passive" to={`/posts/${pages.backwardPage}`}>Назад</Link>
    </div>
  );
};

export default PageBackward;