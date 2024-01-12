import styles from "./Logo.module.scss";
import Button from "../ui/button/Button";

const Logo = () => {
  return (
    <Button href="/" className={styles.logo} type="link">
      <img src="/logo.svg" alt="Логотип" className={styles.image} />
    </Button>
  );
};

export default Logo;
