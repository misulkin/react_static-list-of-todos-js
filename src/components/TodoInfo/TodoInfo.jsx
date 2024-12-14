import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ task }) => (
  <article
    className={task.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
  >
    <h2 className="TodoInfo__title">{task.title}</h2>

    <UserInfo task={task} />
  </article>
);
