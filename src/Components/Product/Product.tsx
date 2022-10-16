import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetProduct, SetBasketData } from '../../actions';
import { MOCK_DECRIPTION_PRODUCT } from '../../mockData';
import { IProductBasketItem, IProductItem } from '../../types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './styles.css';

const Product = () => {
  const { id_category, id_product } = useParams();
  const [productQuantity, setProductQuantity] = useState(0);
  const dispatch: any = useDispatch();
  const { productsList, totalPrice } = useTypedSelector(
    (state) => state.basket,
  );
  const { loading, data } = useTypedSelector((state: any) => state.product);

  const product = data[0];
  useEffect(() => {
    if (id_category && id_product) {
      dispatch(GetProduct(id_category, id_product));
    }
  }, [id_category, id_product]);

  const handleChangeQuantity = ({
    sign,
    value,
  }: {
    sign?: string;
    value?: any;
  }) => {
    if (sign === '-') {
      setProductQuantity((prevState) => Number(prevState - 1));
    }
    if (sign === '+') {
      setProductQuantity((prevState) => Number(prevState + 1));
    }
    if (value) {
      setProductQuantity(Number(value));
    }
  };

  const handleBuy = () => {
    const newTotalPrice = totalPrice + product.price * productQuantity;
    let newProductList;
    if (
      productsList.length > 0 &&
      productsList.some(
        (item: IProductBasketItem) => item?.product?.id === product.id,
      )
    ) {
      newProductList = productsList.map((productItem: any) => {
        if (productItem.product.id === product.id) {
          return {
            product: { ...productItem.product },
            quantity: productItem.quantity + productQuantity,
          };
        }
        return {
          product: productItem.product || product,
          quantity: productItem.quantity || +productQuantity,
        };
      });
    } else {
      newProductList = [
        ...productsList,
        { product, quantity: +productQuantity },
      ];
    }

    dispatch(
      SetBasketData({
        productsList: newProductList,
        totalPrice: newTotalPrice,
      }),
    );
  };

  const getContent = () => {
    if (loading) {
      return <div>LOADING...</div>;
    }

    if (data) {
      return (
        data &&
        data.length > 0 &&
        data.map((item: IProductItem) => {
          return (
            <div className="productContainer" key={item.id}>
              <div className="productImgAndCount">
                <div className="productImg_container">
                  <div className="productImg">some img</div>
                </div>
                <div className="productCount_container">
                  <div className="productCount_set">
                    <div className="productCount_set__viewCount">
                      <input
                        type="text"
                        className="viewCount__input"
                        value={productQuantity}
                        onChange={(e) =>
                          handleChangeQuantity({ value: e.target.value })
                        }
                      />
                    </div>
                    <div className="productCount_set__changeCount">
                      <div
                        className="changeCount"
                        onClick={() => handleChangeQuantity({ sign: '+' })}
                      >
                        +
                      </div>
                      <div
                        className="changeCount"
                        onClick={() => handleChangeQuantity({ sign: '-' })}
                      >
                        -
                      </div>
                    </div>
                  </div>
                  <div className="productCount_btn">
                    <button
                      type="button"
                      onClick={handleBuy}
                      disabled={!productQuantity}
                    >
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="productDescription">
                <div className="productDecription_title">{item.title}</div>
                <div className="productDecription_content">
                  {MOCK_DECRIPTION_PRODUCT}
                </div>
              </div>
            </div>
          );
        })
      );
    }
  };

  return <div className="productListContainer">{getContent()}</div>;
};

export default Product;
