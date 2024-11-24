import React from 'react';

export interface IColumnProps {
  children: React.JSX.Element[] | React.JSX.Element | any,
  className?: string,
}

export default function Column(props: IColumnProps) {
  return (
    <div className={'flex flex-col ' + props.className ?? ''}>
      {props.children}
    </div>
  );
}