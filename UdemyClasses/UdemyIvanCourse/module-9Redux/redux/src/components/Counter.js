const Counter = ({ counter, inc, dec, res, rnd }) => {
  return (
    <div className='jumbotron'>
      <h2>{counter}</h2>

      <button onClick={dec} className="btn btn-primary">DEC</button>
      <button onClick={inc} className="btn btn-primary">INC</button>
      <button onClick={rnd} className="btn btn-primary">RND</button>
      <button onClick={res} className="btn btn-primary">RES</button>
    </div>
  )
}

export default Counter;