import express from "express";
import users from "./usersRoutes.js"
import cors from 'cors';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.render('index');
  })
  app.route('/addUser.ejs').get((req, res) => {
    res.render('addUser');
  })

  app.set('view engine', 'js');
  app.set('views','../front/src/');

  app.use(
    express.json(),
    express.urlencoded({extended: true}),
    cors(),
    users
    
  )
}



export default routes