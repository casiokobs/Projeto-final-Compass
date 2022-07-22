function checkToken(){
    const token = localStorage.getItem('token');
    if (token) {

    }else{
        window.location = '/'; 
    }
}

export default checkToken;