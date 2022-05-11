import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/entities/Pages';

function PageEnumerator() {
  const dispatch = useDispatch();
  const { pages } = useSelector(state => state.entities);

  const handleCurrentPage = page => {
    dispatch(setCurrentPage({ currentPage: page }));
  }

  const getLinkState = index => {
    return pages.currentPage === index
      ? "page active"
      : "page passive";
  }

  const handlePages = () => {
    let arr = [...Array(pages.pages).keys()].map(n => ++n);

    return arr.map(n => 
      <span key={n} onClick={() => handleCurrentPage(n)}>
        <Link className={getLinkState(n)} to={`/posts/${n}`}>{n}</Link>
      </span>
    );
  }

  return (
    <p className="App-footer_num">
      { handlePages() }
    </p>
  );
};

export default PageEnumerator;