import React from 'react';

export const Card = ( {children, ...rest} ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};