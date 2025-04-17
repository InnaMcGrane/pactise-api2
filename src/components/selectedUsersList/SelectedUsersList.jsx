import SelectedUser from "../SelectedUser/SelectedUser";
import cn from "classnames";
import styles from "./selectedUsersList.module.scss";

function SelectedUsersList({ selectedUsers, multiUserHandler }) {
  return (
    <div className={cn(styles["selected-users-list"])}>
      {selectedUsers.map((el) => {
        return <SelectedUser name={`${el.firstName} ${el.lastName}`} key={el.id} multiUserHandler={() => multiUserHandler(el.id)} />;
      })}
    </div>
  );
}

export default SelectedUsersList;
