import express from "express"
import bcrypt from "bcrypt"
import UserService from "../service/UserService.js"
const router = express.Router()

router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true
  })
})

router.get("/logout", (req, res) => {
  req.session.user = undefined

  res.redirect("/")
})

router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true
  })
})

router.post("/createUser", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  UserService.selectOne(email).then(user => {
    if(user == undefined){
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      UserService.Create(email, hash)

      res.redirect("/login")
    } else{
      res.render("userAlreadyExist")
    }
  })
})

router.post("/authenticate", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  UserService.selectOne(email).then(user => {
    if(user != undefined){
      const correct = bcrypt.compareSync(password, user.password)

      if(correct){
        req.session.user = {
          id: user._id,
          email: user.email
        }

        res.redirect("/")
      } else{
        res.render("userAlreadyExist")
      }
    } else{
      res.render("userAlreadyExist")
    }
  })
})

export default router