import {
  NavigationItemType,
  NavigationType,
} from "@/app/@types/NavigationType";
import { FC } from "react";
import Button from "../ui/button/Button";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

const Navigation: FC<NavigationType> = ({ list }) => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {list.map((item: NavigationItemType) => (
          <li key={item.id}>
            <Button
              className={`${styles.button} ${
                pathname === item.href ? styles.active : ""
              }`}
              type="link"
              href={item.href}
              Icon={item.icon}
              iconSize={20}
              iconColor={pathname === item.href ? "#1a1a1c" : "#606060"}
            >
              {item.title}
              {item.counter && (
                <span className={styles.counter}>{item.counter}</span>
              )}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
