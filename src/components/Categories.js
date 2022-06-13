import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const text = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const handleCheck = () => dispatch(checkStatus);
  return (
    <>
      <button type="button" onClick={handleCheck}>Check Status</button>
      <p>{text}</p>
    </>
  );
}
