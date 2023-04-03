import { useEffect, useState } from 'react';
import { FILTERS } from '../utils/constants/filters';

const useToDo = () => {
  const [toDos, setToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState(toDos);
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    if (filter === FILTERS.ACTIVE) {
      setFilteredToDos(toDos.filter((toDo) => toDo.active));
    } else if (filter === FILTERS.COMPLETE) {
      setFilteredToDos(toDos.filter((toDo) => !toDo.active));
    } else {
      setFilteredToDos(toDos);
    }
  }, [toDos, filter]);

  return {
    toDos,
    setToDos,
    filteredToDos,
    filter,
    setFilter,
  };
};

export default useToDo;
