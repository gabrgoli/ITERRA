import { createAction, createAsyncThunk } from "@reduxjs/toolkit"


                        /////////////////////////////////////   
                        //             ACCIONES            //   
                        ///////////////////////////////////// 

    

    export const DARKMODE=createAction('DARKMODE',(darkMode)=>{ 
        return {payload:darkMode}
    })

    export const ISDRAGGING=createAction('ISDRAGGING',(isDragging)=>{ 
        return {payload:isDragging}
    })

    export const UPDATEENTRY=createAction('UPDATEENTRY',(entry)=>{ 
        return {payload:entry}
    })

    export const NEWLEAD=createAction('NEWLEAD',(entry)=>{ 
        return {payload:entry}
    })




    // export const SEARCHOFFERSBYCATEGORY = createAsyncThunk('SEARCHOFFERSBYCATEGORY', async (input) => { 
    //     //const response = await axios.post(`${api}/offers/getoffersbycategory/?category=${input.category}`)
    //     const response = await axios.post(`${api}/offers/getoffersbycategory`,input)
        
    //     return response.data.map((offer)=>({
    //         ...offer,
    //         images:['https://www.wimacpc.com/assets/images/no-disponible.png'],
    //         price: 3570,
    //         discount:10
    //     }))
    // })  