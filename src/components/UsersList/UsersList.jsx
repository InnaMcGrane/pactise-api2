import cn from "classnames";
import styles from "./usersList.module.scss"
import Card from "../Card/Card";

function UsersList({ users, multiUserHandler }) {
  return (
    <div className={cn(styles["users-list"])}>
      {users.map((user) => {
        return <Card id={user.id} name={user.firstName + " " + user.lastName} key={user.id} img={user.image} multiUserHandler={multiUserHandler} />;
      })}
    </div>
  );
}

export default UsersList;