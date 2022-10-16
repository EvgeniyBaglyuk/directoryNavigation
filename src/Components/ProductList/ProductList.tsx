import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetProducts } from '../../actions';
import { Link, useParams } from 'react-router-dom';
import { IProductItem } from '../../types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './styles.css';

const ProductList = () => {
  const { id_category } = useParams();
  const dispatch: any = useDispatch();
  const { loading, data } = useTypedSelector((state) => state.products);

  useEffect(() => {
    id_category && dispatch(GetProducts(id_category));
  }, [id_category]);

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
            <Link
              to={`/categories/${id_category}/product/${item.id}`}
              key={item.id}
            >
              <div className="itemProduct">{item.title}</div>
            </Link>
          );
        })
      );
    }
  };

  return <div className="productListContainer">{getContent()}</div>;
};

export default ProductList;
