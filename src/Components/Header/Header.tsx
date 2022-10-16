import React, { useState } from 'react';
import { BsBasket3 } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { BreadCrumbs } from '../BreadCrumbs';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IProductBasketItem } from '../../types';
import './styles.css';

const Header = () => {
  const [showBasket, setShowBasket] = useState(false);
  const { productsList, totalPrice } = useTypedSelector(
    (state) => state.basket,
  );

  const totalQuantity = productsList.reduce(
    (acc: number, item: { quantity: number }) => {
      return acc + item.quantity;
    },
    0,
  );
  const handleBasketShow = () =>
    setShowBasket((prevState: boolean) => !prevState);
  const showBasketData = () => {
    if (productsList.length < 1) {
      return 'Корзина пуста';
    } else {
      const BasketItems = () =>
        productsList.map((productItem: IProductBasketItem) => {
          const {
            product: { id, title },
            quantity,
          } = productItem;
          return (
            <div className="basket-item-container" key={id}>
              <div className="basket-item__product-name">{title}</div>
              <div className="basket-item__productCount_set">
                <div className="productCount_set__viewCount">
                  <input
                    type="text"
                    className="viewCount__input"
                    value={quantity}
                    // заглушка что б не было ошибок, реализовать функционал
                    onChange={(e) => console.log({ value: e.target.value })}
                  />
                </div>
                <div className="basket-item__changeCount">
                  <div
                    className="changeCount"
                    // onClick={() => handleChangeQuantity({ sign: '+' })}
                  >
                    +
                  </div>
                  <div
                    className="changeCount"
                    // onClick={() => handleChangeQuantity({ sign: '-' })}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="basket-item__product-del">
                <AiOutlineDelete />
              </div>
            </div>
          );
        });
      return (
        <>
          <div className="basket-items-container">{BasketItems()}</div>
          <div className="payForGoodsBtn-container">
            <div className="payForGoodsBtn">Оплатить</div>
          </div>
        </>
      );
    }
  };
  const basketViewClassName =
    productsList.length > 0
      ? 'basketViewWithProducts'
      : 'basketViewWithoutProducts';
  return (
    <div className="headerContainer">
      <div className="navContainer">
        <div>Баглюк Евгений</div>
        <BreadCrumbs />
      </div>

      <div className="cardContainer" onClick={handleBasketShow}>
        <div className="cardItem">
          <div className="cardItem-icon">
            <BsBasket3 />
          </div>
          {totalPrice && totalQuantity ? (
            <div className="cardItem-content">
              <div>{`Сумма: ${totalPrice?.toFixed(1)} ₽`}</div>
              <div>{`Кол-во: ${totalQuantity} ед`}</div>
            </div>
          ) : (
            <div className="cardItem-content"> Корзина пуста</div>
          )}
        </div>
      </div>

      {showBasket && (
        <div className={basketViewClassName}>{showBasketData()}</div>
      )}
    </div>
  );
};

export default Header;
