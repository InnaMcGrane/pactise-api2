import cn from "classnames"
import styles from "./listgroup.module.scss";

const ListGroup = ({use = 'ul', children}) => {
	if (use === "ul") {
		return <ul>{children}</ul> 
  }

	if (use === "ol") {
		return <ol>{children}</ol>
  }
}

export default ListGroup