import { actions } from "./App.js"

export default function operationButton({dispatch,operation}){
    return(
        <button onClick={ () => dispatch({type:actions.CHOOSE_OPERATION,payload:{operation}})}>
            {operation}

        </button>
    )

}