import { useSelector, useDispatch } from "react-redux";
import { inc, dec, rnd, res } from '../actions';
// import { bindActionCreators } from "redux";

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='jumbotron'>
      <h2>{counter}</h2>

      <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
      <button onClick={() => dispatch(res())} className="btn btn-primary">RES</button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.value
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   const { inc, dec, rnd, res } = bindActionCreators(actions, dispatch);

//   return {
//     inc,
//     dec,
//     rnd,
//     res
//   }
// }

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;