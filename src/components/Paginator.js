import PageEnumerator from './PageEnumerator';
import PageBackward from './PageBackward';
import PageForward from './PageForward';

function Paginator() {

  return (
    <footer className="App-footer">
      <PageBackward />
      <PageEnumerator />
      <PageForward />
    </footer>
  );
};

export default Paginator;