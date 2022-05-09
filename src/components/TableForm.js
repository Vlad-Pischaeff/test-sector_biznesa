import TableHeader from './TableHeader';
import TableBody from './TableBody';

function FormTable() {
  
  console.log('FormTable render...');

  return (
    <table className="table">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default FormTable;