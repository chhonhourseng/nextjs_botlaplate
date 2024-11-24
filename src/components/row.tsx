import React from 'react';

export interface IRowProps{
  children: React.JSX.Element[] | React.JSX.Element | any,
  className?: string,
}

export default function Row(props: IRowProps ){
  return (
    <div className={'flex ' + props.className ?? ''}>
      {props.children}
    </div>
  );
}