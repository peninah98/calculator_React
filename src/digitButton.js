import { actions } from "./App.js"

export default function DigitButton({dispatch,digit}){
    return(
        <button onClick={ () => dispatch({type:actions.ADD_DIGIT,payload:{digit}})}>
            {digit}

        </button>
    )

}