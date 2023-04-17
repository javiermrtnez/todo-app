// DEPRECATED - UNUSED
export interface IToDo {
  id: number;
  value: string;
  active: boolean;
}

export interface IToDos extends Array<IToDo> {}

export interface INewTodoFormProps {
  toDos: IToDos;
  setToDos: (toDos: IToDos) => void;
}
