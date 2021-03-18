import React from 'react';
import './Loader.css';
import isLoadingSelector from 'redux/selectors/isLoadingSelector';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isLoading = useSelector(isLoadingSelector);
  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
