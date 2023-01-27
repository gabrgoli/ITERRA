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


function entryUpdated(state,action){
  let array = [];
  state.entries.map((entry) =>{
    //console.log('action.payload',action.payload)
    if(entry._id === action.payload[0]._id){
      entry._id = action.payload[0]._id;
      entry.name = action.payload[0].name;
      entry.tel = action.payload[0].tel;
      entry.status = action.payload[0].status;
    }
    //return entry;
    
  })
  return state.entries;
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
     // let value=entryUpdated(state,action)
      //console.log('value es:',value)
      console.log('action.payload',action.payload[0])
     state.entries.map((entry) =>{
      if(entry._id === action.payload[0]._id){
        entry.status = action.payload[0].status
        state.entries.push(action.payload[0])
      }
     })
      //return state.entries
    })


})
export default rootReducer