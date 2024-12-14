import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(task => (
      <TodoInfo task={task} />
    ))}
  </section>
);
