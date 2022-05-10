import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/entities/Pages';

function PageForward() {
  const dispatch = useDispatch();
  const { pages } = useSelector(state => state.entities);

  const goForward = () => {
    pages.currentPage === pages.pages
      ? dispatch(setCurrentPage({ currentPage: 1 }))
      : dispatch(setCurrentPage({ currentPage: pages.currentPage + 1 }));
  }

  return (
    <div onClick={goForward}>
      <Link className="App-footer_dir passive" to={`/posts/${pages.forwardPage}`}>Далее</Link>
    </div>
  );
};

export default PageForward;