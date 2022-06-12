const reduce=(state, action)=>{
  switch(action){
    case 'increment':
      return(state+1);
    case 'decrement':
      return(state-1);
    default:
      return state;
  }
}

function Test() {
  const [count, dispatch] = useReducer(reduce, 10)
  return (
    <>
  <div className="d-flex m-5">
  <button className="btn btn-info" onClick={()=>dispatch('decrement')}>-</button>

<p className="m-5">{count}</p>

<button className="btn btn-success" onClick={()=>dispatch('increment')}>+</button>
  </div>
  
    </>
  )
}

export default Test
