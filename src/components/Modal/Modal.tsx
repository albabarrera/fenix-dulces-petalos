import React, { PropsWithChildren } from 'react';

import './Modal.css';

interface Props {
  title?: string;
  onClose: () => void;
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClose,
  title,
}) => {
  return (
    <div className='wrapper'>
      <div className='headerWrapper'>
        <div className='titleWrapper'>
          <h2 className='title'>{title}</h2>
            </div>
            <button className='closeButton' onClick={() => onClose()}>
        <svg
        id='cross'
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='closeIcon'
      >
        <path
          d="M25.7075 24.2925C25.8004 24.3854 25.8741 24.4957 25.9244 24.6171C25.9747 24.7385 26.0006 24.8686 26.0006 25C26.0006 25.1314 25.9747 25.2615 25.9244 25.3829C25.8741 25.5043 25.8004 25.6146 25.7075 25.7075C25.6146 25.8004 25.5043 25.8741 25.3829 25.9244C25.2615 25.9747 25.1314 26.0006 25 26.0006C24.8686 26.0006 24.7385 25.9747 24.6171 25.9244C24.4957 25.8741 24.3854 25.8004 24.2925 25.7075L16 17.4138L7.70751 25.7075C7.51987 25.8951 7.26537 26.0006 7.00001 26.0006C6.73464 26.0006 6.48015 25.8951 6.29251 25.7075C6.10487 25.5199 5.99945 25.2654 5.99945 25C5.99945 24.7346 6.10487 24.4801 6.29251 24.2925L14.5863 16L6.29251 7.70751C6.10487 7.51987 5.99945 7.26537 5.99945 7.00001C5.99945 6.73464 6.10487 6.48015 6.29251 6.29251C6.48015 6.10487 6.73464 5.99945 7.00001 5.99945C7.26537 5.99945 7.51987 6.10487 7.70751 6.29251L16 14.5863L24.2925 6.29251C24.4801 6.10487 24.7346 5.99945 25 5.99945C25.2654 5.99945 25.5199 6.10487 25.7075 6.29251C25.8951 6.48015 26.0006 6.73464 26.0006 7.00001C26.0006 7.26537 25.8951 7.51987 25.7075 7.70751L17.4138 16L25.7075 24.2925Z"
          fill="currentColor"
        />
      </svg>
        </button>
        
          
      </div>
      <div className='contentWrapper'>
        <div className='content'>
          <div className='textWrapper'>{children}</div>
        </div>
      </div>
    </div>
  );
};
