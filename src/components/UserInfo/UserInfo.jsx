export const UserInfo = ({ task }) => (
  <a className="UserInfo" href={task.user.email}>
    {task.user.username}
  </a>
);
