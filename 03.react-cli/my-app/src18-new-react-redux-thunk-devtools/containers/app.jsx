import {connect} from "react-redux";
import {decrement, increment,incrementAsync} from "../redux/actions";
import Couter from "../components/couter";

// 组件和redux关联起来
export default connect(
    state=>({count:state}),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Couter)
