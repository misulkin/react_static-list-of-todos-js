import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(task => (
      <TodoInfo key={task.id} task={task} />
    ))}
  </section>
);
