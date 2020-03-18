import React, { useState, useEffect } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('useEffect every after rendering')
  })

  useEffect(() => {
    console.log('useEffet')
  }, [])

  useEffect(() => {
    console.log('useEffet name only')
  }, [name])

  return (
    <>
      <p>
        現在の{name}は{price}です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value })}/>
    </>
  )
}

App.defaultProps = {
  name: 'aa',
  price: 1000
}

export default App
