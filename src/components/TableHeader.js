import { useDispatch, useSelector } from 'react-redux';
import { switchSorting } from '../store/entities/Ui';

function TableHeader() {
  const dispatch = useDispatch();
  const { ui } = useSelector(state => state.entities);

  const handlerOnClick = e => {
    dispatch(switchSorting({ key: e.target.id }));
  }

  const setArrow = id => {
    return ui[id] ? "arrow asc" : "arrow desc";
  }

  console.log('TableHeader render...', ui);

  return (
    <thead>
      <tr>
        <th className="th-1">
          <div className="th-wrap">
            <span>ID</span>
            <div className="arrow-wrap">
              <div className={setArrow('id')} id="id" onClick={handlerOnClick}></div>
            </div>
          </div>
        </th>
        <th className="th-2">
          <div className="th-wrap">
            <span>Заголовок</span>
            <div className="arrow-wrap">
              <div className={setArrow('title')} id="title" onClick={handlerOnClick}></div>
            </div>
          </div>
        </th>
        <th className="th-3">
          <div className="th-wrap">
            <span>Описание</span>
            <div className="arrow-wrap">
              <div className={setArrow('description')} id="description" onClick={handlerOnClick}></div>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;