const initialData = {
    loading : false
};

export const alertsReducer=(state=initialData , action)=>{

    switch(action.type)
    {
          case 'Yükleniyor' : {
              return{
                  ...state,
                  loading : action.payload
              }
          }

          default : return state
    }

}