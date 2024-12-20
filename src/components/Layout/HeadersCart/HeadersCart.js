import { Icon, Image } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { map } from "lodash";
import classNames from "classnames";
import styles from "./HeadersCart.module.scss";

export function HeadersCart() {
  const {
    query: { step = 1 },
  } = useRouter();

  const currentStep = step;

  const steps = [
    { number: 1, title: "Carrito" },
    { number: 2, title: "Pago" },
    { number: 3, title: "Confirmacion de Pago" },
  ];

  return (
    <div className={styles.headerCart}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming" />
        </Link>
      </div>

      <div className={styles.center}>
        {map(steps, (step) => (
          <div
            key={step.number}
            className={classNames({
              [styles.active]: step.number === Number(currentStep),
              [styles.success]: step.number < Number(currentStep),
            })}
          >
            <span className={styles.number}>
              <Icon name="check" />
              {step.number}
            </span>
            <span>{step.title}</span>
            <span className={styles.space}></span>
          </div>
        ))}
      </div>

      <div className={styles.right}>
        <Icon name="lock" />
        <div>
          <span>Pago Seguro</span>
          <span>256-bit LLL Secure</span>
        </div>
      </div>
    </div>
  );
}
