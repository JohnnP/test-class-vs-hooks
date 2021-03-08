import {memo} from 'react';

type props = {
  names: Array<string>
}

function Display({names}: props) {

  console.log('Rerender');

  return (
    <div>
      {names.map((name, index) => {
        return <div key={index}>{name}</div>; 
      })}
    </div>
  );
}

export default memo(Display);