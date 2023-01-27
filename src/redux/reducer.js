import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = {
  entries:[{
    name:'Gabriel',
    tel:'1544494024',
    status:'nuevo'
  },
  {
    name:'Sapo Pepe',
    tel:'154584024',
    status:'nuevo'
  }
],
  sideMenuOpenClose:false,
  darkMode:false,
}


const rootReducer = createReducer(initialState, (builder) => {
  builder



                          ///////////////
                         //  ACCIONES //   
                        ////////////////

    .addCase(actions.DARKMODE, (state, action) => {
      state.darkMode=action.payload
    })


})
export default rootReducer