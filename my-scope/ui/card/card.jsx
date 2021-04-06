import React from 'react';
import { Button } from '@bitwave/demo-scope.ui.button';


export const Card = ( {children, ...rest} ) => {
  return (
    <div {...rest}>
      <Button>Click Here!</Button>
    </div>
  )
};