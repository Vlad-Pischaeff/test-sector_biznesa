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
    return pages.currentPage - 1 === index
      ? "page active"
      : "page passive";
  }

  const handlePages = () => {
    let arr = new Array(pages.pages).fill(1);

    return arr.map((n, i) => 
      <span key={i} onClick={() => handleCurrentPage(i + 1)}>
        <Link className={getLinkState(i)} to={`/posts/${i + 1}`}>{i + 1}</Link>
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