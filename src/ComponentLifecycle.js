import React from 'react';
import { useState } from 'react';
import Text from './Text';

const ComponentLifecycle = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Show</button>
      { showText && <Text />}
    </div>
  )
}

export default ComponentLifecycle
