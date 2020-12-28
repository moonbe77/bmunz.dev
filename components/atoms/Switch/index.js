import { useStateContext, useStateDispatch } from '../../../store/store';
import {HiSun,HiMoon} from 'react-icons/hi';
import style from './switch.module.css';

export default function Switch (){
const state = useStateContext();
const {isDarkTheme} = state
const dispatch = useStateDispatch()

function handleChange(){
    dispatch({
        type: "SWITCH_THEME",
        payload : !isDarkTheme,
    })
}

const shadow = isDarkTheme ?style.shadowDark :style.shadowLight;
    return (<>
    <div className={`${style.switch} ${shadow}`} onClick={handleChange}>
        {isDarkTheme ?<HiSun/>:<HiMoon/>}
        </div>
       
    </>
    )
}