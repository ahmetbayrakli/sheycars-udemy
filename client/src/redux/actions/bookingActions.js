import axios from "axios";
import { message } from "antd";
export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "Yükleniyor", payload: true });

  try {
     await axios.post("/api/bookings/bookcar" , reqObj);

    dispatch({ type: "Yükleniyor", payload: false });
    message.success("Araç Başarıyla Kiralandı");
    setTimeout(() => {
      window.location.href='/userbookings'
    }, 500);

    
  } catch (error) {
    console.log(error);
    dispatch({ type: "Yükleniyor", payload: false });
    message.error("Bir şeyler Yolunda Gitmedi Lüften Tekrar Deneyin");
  }
};

export const getAllBookings=()=>async dispatch=>{

  dispatch({type: 'Yükleniyor' , payload:true})

  try {
      const response = await axios.get('/api/bookings/getallbookings')
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'Yükleniyor' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'Yükleniyor' , payload:false})
  }

}