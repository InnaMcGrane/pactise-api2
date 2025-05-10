import cn from "classnames";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import ListGroup from "../ListGroup/ListGroup";
import ListGroupItem from "../ListGroupItem/ListGroupItem";
import Link from "../Link/Link";

const Header = () => {
  return (
    <header className={cn(styles["header"])}>
      <Logo />
        <ListGroup>
      <Menu>
          <ListGroupItem>
            <Link url="/">Home</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link url="popular">Popular </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link url="contacts">Contacts</Link>
          </ListGroupItem>
      </Menu>
        </ListGroup>
    </header>
  );
};

export default Header;
