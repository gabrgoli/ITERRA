import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = {
  entries:[{
    _id: '7848584554584',
    name:'Gabriel',
    tel:'1544494024',
    status:'nuevo'
  },
  {
    _id: '15487665651',
    name:'Sapo Pepe',
    tel:'154584024',
    status:'nuevo'
  }
  ],
  isDragging: false,
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

    .addCase(actions.ISDRAGGING, (state, action) => {
      state.isDragging=action.payload
    })

    .addCase(actions.UPDATEENTRY, (state, action) => {
      console.log("action es:",action.payload)
      state.entries=state.entries.map((entry) =>{
      if(entry._id === action.payload[0]._id){
        entry.status=action.payload.status
        return entry
      }
      return entry
     })
    })

})
export default rootReducer