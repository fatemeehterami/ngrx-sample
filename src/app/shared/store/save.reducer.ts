import { createReducer, on } from "@ngrx/store"
import { write } from "./save.actions"
import { initialState } from "./save.state"


const _texts = createReducer(initialState,
    on(write,(state,{ value })=>{
        return{
            ...state,
            text:value
        }
    })
    )
export function WriteText(state:any,action:any){
    return _texts(state, action)
}