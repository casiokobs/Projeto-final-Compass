function cadastroUser(e){
    e.preventDefault()
    var user = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    let _data = {
        email: user,
        password: senha, 
    }
    console.log(JSON.stringify(_data));
    fetch('http://localhost:4000/user', {
            method: 'POST',
            body:
                JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(err => alertMessage(err.message)
    )
    function alertMessage(a){
        if (typeof a === 'string') {
            alert(a);    
        }else{
            window.location = '/'; 
        }
    }
}
export default cadastroUser;