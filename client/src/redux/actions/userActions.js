import axios from "axios";
import {message} from 'antd'

export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'Yükleniyor' , payload:true})

    try {
        const response = await axios.post('/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Giriş Başarılı')
        dispatch({type: 'Yükleniyor' , payload:false})
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'Yükleniyor' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'Yükleniyor' , payload:true})

    try {
        const response = await axios.post('/api/users/register' , reqObj)
        message.success('Kayıt Olma Başarılı')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
       
        dispatch({type: 'Yükleniyor' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('Birşeyler Yolunda Gitmedi Lütfen Tekrar Deneyin')
        dispatch({type: 'Yükleniyor' , payload:false})
    }
}