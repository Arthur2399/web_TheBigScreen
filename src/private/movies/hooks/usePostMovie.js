import { API_MOVIES_CREATE } from "../../../helper/routes";

export const usePostMovie = async (movieData) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: movieData
    };
    const response = await fetch(`${API_MOVIES_CREATE}`, options)
    console.log(response.status)
    if(response.status ==400){
        const bad= await response.json(); 
        alert(JSON.stringify(bad.email[0]));
    }else{
      window.location.reload(true);
    }
}