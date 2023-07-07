import React from 'react'

const ConditionalOperator = () => {
    const age = 17;
    const isGreen = false;
  return (
    <div>
      {age>17 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{color: isGreen? "green" : "red"}}>This has colour</h1>
      {isGreen && <button>This is a button</button>}
    </div>
  )
}

export default ConditionalOperator
