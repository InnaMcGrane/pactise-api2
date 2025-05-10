import cn from "classnames";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import ListGroup from "../ListGroup/ListGroup";
import ListGroupItem from "../ListGroupItem/ListGroupItem";

const Header = () => {
  return (
    <header className={cn(styles["header"])}>
      <Logo />
      <Menu>
        <ListGroup>
          <ListGroupItem>Home</ListGroupItem>
          <ListGroupItem>Popular users</ListGroupItem>
          <ListGroupItem>Contacts</ListGroupItem>
        </ListGroup>
      </Menu>
    </header>
  );
};

export default Header;
