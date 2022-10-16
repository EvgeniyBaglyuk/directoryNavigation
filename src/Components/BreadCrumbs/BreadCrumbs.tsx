import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const categoryId = pathname
    ?.match('/categories\\/\\d*')
    ?.['0']?.match(/\d+/)?.['0'];
  const productId = pathname?.match('/product\\/\\d*')?.['0']?.match(/\d+/)?.[
    '0'
  ];

  if (categoryId && productId) {
    return (
      <div>
        <Link to={`/`} className="link">
          <span>..../ </span>
        </Link>
        <Link to={`/categories/${categoryId}`} className="link">
          <span>Категория {categoryId}/ </span>
        </Link>
        <span>Продукт {productId}</span>
      </div>
    );
  }
  if (categoryId) {
    return (
      <div>
        <Link to={`/`} className="link">
          <span>..../ </span>
        </Link>
        <span>Категория {categoryId}</span>
      </div>
    );
  }
  return null;
};

export default BreadCrumbs;
