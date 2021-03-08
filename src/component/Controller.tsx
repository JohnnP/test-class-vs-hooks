import { useState, useCallback } from 'react';
import Display from './Display';

const set = new Set();

function Controller(): JSX.Element { 

  const [names, setName] = useState<Array<string>>([]);

  const addNames = useCallback(() => {
    const newNames = [...names];
    newNames.push('anotherName');
    setName(newNames);
  }, [names]);

  const clearNames = useCallback(() => {
    setName([]);  
  }, []);

  set.add(clearNames);
  console.log(set);
  return (
    <div>
      <button onClick={addNames}>Button</button>
      <Display names={names} />
      <button onClick={clearNames}>Clear</button>
    </div>
  );
}

export default Controller;