import React from 'react';

export interface I{{name.pascalCase()}}Props{
  children: React.JSX.Element[] | React.JSX.Element | any,
}

export default function {{name.pascalCase()}}(props: I{{name.pascalCase()}}Props ){
  return (
    <div >
      {props.children}
    </div>
  );
}