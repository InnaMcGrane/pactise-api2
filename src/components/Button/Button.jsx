import cn from "classnames";
import styles from "./button.module.scss";

function Button({use, handler, disabled, children}) {
    return (
      <button className={cn(styles["btn"], styles[`btn--${use}`])} onClick={handler} disabled={disabled}>
        {children}
      </button>
    );
}

export default Button;