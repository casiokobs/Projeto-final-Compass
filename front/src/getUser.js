async function getUser(e){
    e.preventDefault();
    var user = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    let _data = {
        email: user,
        password: senha, 
    }
    return await fetch("http://localhost:4000/login",{
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(resposta=>{
        console.log(resposta);
        return resposta.json();
    }).then((result) => {
        console.log(result);
        if(result.msg === "autenticado"){
            localStorage.setItem('token', result.token);
            window.location = '/home'; 
         } else {
            document.getElementById('lable-alert').classList.remove('hiden');
         }
    }).catch(err =>{
        console.log(err)
    }) 
}

export default getUser;
