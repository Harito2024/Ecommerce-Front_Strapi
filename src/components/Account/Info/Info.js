import styles from "./Info.module.scss";
import { Button, Icon } from "semantic-ui-react";
import { DateTime } from "luxon";
import { useAuth } from "@/hooks";

export function Info() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className={styles.info}>
      <Button icon className={styles.user}>
        <Icon name="user outline"></Icon>
      </Button>
      <h3 className={styles.username}>{user.username}</h3>
      <h4 className={styles.email}>{user.email}</h4>
      <p className={styles.createdAt}>
        Miembre desde:{" "}
        {DateTime.fromISO(user.createdAt, { locale: "es" }).toFormat("DDD")}
      </p>
    </div>
  );
}
