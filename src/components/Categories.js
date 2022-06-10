import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from './redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.categoriesReducer);
  const handleCheck = () => dispatch(checkStatus());

  return (
    <>
      <button type="button" onClick={handleCheck}>Check Status</button>
      <p>{message}</p>
    </>
  );
}
