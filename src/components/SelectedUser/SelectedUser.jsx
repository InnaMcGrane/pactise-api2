import cn from "classnames";
import styles from "./selectedUser.module.scss"
import Button from "../Button/Button";
import { FaCross } from "react-icons/fa";

function SelectedUser({ name, multiUserHandler}) {
  return (
    <span className={cn(styles["selected-user"])}>
      {name}
      <Button use={"transparent"} handler={multiUserHandler}>
        <FaCross />
      </Button>
    </span>
  );
}

export default SelectedUser;