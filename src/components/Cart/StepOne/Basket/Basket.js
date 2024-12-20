import { Icon, Image, Dropdown } from "semantic-ui-react";
import { ENV } from "@/utils";
import { map } from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks";

import styles from "./Basket.module.scss";

export function Basket(props) {
  const { games } = props;
  const { changeQuantityItem, deleteItem } = useCart();
  const server = `${ENV.SERVER_HOST}`;

  const options = Array.from({ length: 10 }, (_, index) => {
    const number = index + 1;
    return { key: number, text: String(number), value: number };
  });
  console.log(props);
  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>

      <div className={styles.block}>
        {map(games, (game) => (
          <div key={game.id} className={styles.product}>
            <Image
              src={`${server}${game.attributes.cover.data.attributes.url}`}
            />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{game.attributes.title}</p>
                  <p>{game.attributes.platform.data.attributes.title}</p>
                </div>
                <Icon
                  name="trash alternate online"
                  link
                  onClick={() => deleteItem(game.id)}
                />
              </div>
              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={options}
                  selection
                  value={game.quantity}
                  compact
                  onChange={(_, data) =>
                    changeQuantityItem(game.id, data.value)
                  }
                />
                <span>
                  $
                  {fn.calcDiscountedPrice(
                    game.attributes.price,
                    game.attributes.discount
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Basket de Basket</h2>
    </div>
  );
}
