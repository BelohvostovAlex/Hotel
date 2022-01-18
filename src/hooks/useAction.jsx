import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {allActionCreators} from '../redux/actions'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}