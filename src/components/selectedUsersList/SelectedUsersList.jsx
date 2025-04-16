import SelectedUser from "../SelectedUser/SelectedUser";
import cn from "classnames";
import styles from "./selectedUsersList.module.scss";

function SelectedUsersList({ selectedUsers }) {
  return (
    <div className={cn(styles["selected-users-list"])}>
      {/* <SelectedUser name={'Michael Johnson'}/>
        <SelectedUser name={'Emily Johnson'}/>
        <SelectedUser name={'Johnson'}/>
        <SelectedUser name={'Michael Williams'}/>
        <SelectedUser name={'Emily Williams'}/> */}
      {selectedUsers.map((el) => {
        console.log(el);
        return <SelectedUser name={`${el.firstName} ${el.lastName}`} key={el.id} />;
      })}
    </div>
  );
}

export default SelectedUsersList;
