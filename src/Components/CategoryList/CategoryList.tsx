import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetCategories } from '../../actions';
import { Link } from 'react-router-dom';
import { ICategoriesItem } from '../../types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './styles.css';

const CategoryList = () => {
  const dispatch: any = useDispatch();
  const { loading, data } = useTypedSelector((state) => state.categories);

  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  const getContent = () => {
    if (loading) {
      return <div>LOADING...</div>;
    }

    if (data) {
      return (
        data &&
        data.length > 0 &&
        data.map((item: ICategoriesItem) => {
          return (
            <Link to={`/categories/${item.id}`} key={item.id}>
              <div className="itemCategory">{item.title}</div>
            </Link>
          );
        })
      );
    }
  };

  return <div className="categoryListContainer">{getContent()}</div>;
};

export default CategoryList;
