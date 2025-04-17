import cn from "classnames";
import styles from "./usersList.module.scss";
import Card from "../Card/Card";

function UsersList({ users, selectedUsers, multiUserHandler }) {
  // id который пришел, мы проверяем на активность в массиве selectedUsers
  const isUserActive = (id) => {
    return !!selectedUsers.find((user) => user.id === id)  //undefined -> false(true) -> false
  }

  return (
    <div className={cn(styles["users-list"])}>
      {users.map((user) => {
        return (
          <Card active={isUserActive(user.id)} id={user.id} name={user.firstName + " " + user.lastName} key={user.id} img={user.image} multiUserHandler={multiUserHandler} />
        );
      })}
    </div>
  );
}

export default UsersList;
