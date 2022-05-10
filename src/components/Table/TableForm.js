import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './style.css';

function FormTable() {
  
  return (
    <table className="table">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default FormTable;