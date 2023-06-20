import { message } from 'antd';
import axios from 'axios';

export const getAllCars=()=>async dispatch=>{

    dispatch({type: 'Yükleniyor' , payload:true})

    try {
        const response = await axios.get('/api/cars/getallcars')
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
        dispatch({type: 'Yükleniyor' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'Yükleniyor' , payload:false})
    }

}

export const addCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'Yükleniyor' , payload:true})

    try {
         await axios.post('/api/cars/addcar' , reqObj)
       
         dispatch({type: 'Yükleniyor' , payload:false})
         message.success('Yeni Araç Başarıyla Yüklendi')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'Yükleniyor' , payload:false})
    }
      

}

export const editCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'Yükleniyor' , payload:true})

    try {
         await axios.post('/api/cars/editcar' , reqObj)
       
         dispatch({type: 'Yükleniyor' , payload:false})
         message.success('Araç Detayları Başarıyla Değiştirildi')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'Yükleniyor' , payload:false})
    }
      

}

export const deleteCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'Yükleniyor' , payload:true})

    try {
         await axios.post('/api/cars/deletecar' , reqObj)
       
         dispatch({type: 'Yükleniyor' , payload:false})
         message.success('Araç Başarıyla Silindi')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'Yükleniyor' , payload:false})
    }
      

}