import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const reset = () => setCount(0)
  const duplicate = () => setCount(count * 2)
  const devide3 = () => setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )

  return (
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={duplicate}>duplicate</button>
        <button　onClick={devide3}>ナベアツ</button>
      </div>
    </>
  )
}

export default App
