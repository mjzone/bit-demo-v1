import React from 'react';
import { Button } from '@bitwave/demo-scope.ui.button';


export const Card = ( {children, ...rest} ) => {
  return (
    <div {...rest}>
      <h2>This is a label</h2>
      <Button>Click Here!</Button>
    </div>
  )
};