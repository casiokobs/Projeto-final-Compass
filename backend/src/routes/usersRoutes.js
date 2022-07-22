import express from "express";
import jwt  from "jsonwebtoken";
import UserController from "../controller/usersController.js";
import users from "../model/User.js";
const router = express.Router();

router
  .get("/user", UserController.listUser)
  .get("/user/:id", UserController.listUserById)
  .post("/user", UserController.addUser)
  .put("/user/:id", UserController.updateUser)
  .delete("/user/:id", UserController.deleteUser)
  .post("/login", async (req,res )=>{
    const {email, password} = req.body
    if(!email){
      return res.status(422).json({msg: 'O email é obrigatorio'})
    }
    if(!password){
      return res.status(422).json({msg: 'A senha  é obrigatorio'})
    }
    const user = await users.findOne({email:email})
    if(!user){
      return res.status(404).json({msg: 'Usuario nao encontrado'})
    }

    if(password != user.password){
      return res.status(422).json({msg: 'Senha incorreta'})
    }
    try{
      const secret = 'sfihu!@#af212312b1123@';

      const token = jwt.sign({
        id:user._id,
      },secret,{ expiresIn: 60 }
      )
      res.status(200).json({msg:'autenticado',token})      
    }catch(err){
      console.log(err)
      res.status(500).json({
        msg:'Erro no servidor',
      })
    }

  })

function checkToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if(!token){
    return res.status(401).json({msg:'usuario nao conectado'})
  }
  try{
    jwt.verify(toke,secret)
    next()
  }catch(err){
    res.status(400).json({msg:'token invalido'})
  }
}

export default router;   