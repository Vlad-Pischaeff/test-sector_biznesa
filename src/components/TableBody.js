import { useSelector } from 'react-redux';
import { ENTRIES_PER_PAGE } from '../store/middleware';

function TableBody() {
  const { posts, pages } = useSelector(state => state.entities);

  const showPosts = () => {
    if (posts.state === 'loading') return <tr><td colSpan="3">loading...</td></tr>;
    if (posts.state === 'fullfiled') {
      let arr = posts.filteredList.slice(ENTRIES_PER_PAGE * (pages.currentPage - 1), ENTRIES_PER_PAGE * pages.currentPage);
      return arr.map((n, i) =>  <tr key={i}>
                                  <td className="column1">{n.id}</td>
                                  <td>{n.title}</td>
                                  <td>{n.body}</td>
                                </tr>);
    }
    if (posts.state === 'failed') return <tr><td colSpan="3">loading posts fail...</td></tr>;
  }

  return (
    <tbody>
      { showPosts() }
    </tbody>
  );
};

export default TableBody;