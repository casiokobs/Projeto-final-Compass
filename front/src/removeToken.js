import checkToken from "./checkToken";
function removeToken(){
    localStorage.removeItem('token');
    checkToken();
}

export default removeToken;