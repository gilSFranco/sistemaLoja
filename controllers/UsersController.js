import express from "express"
import UserService from "../service/UserService.js"
const router = express.Router()

router.get("/login", (req, res) => {
  res.render("login")
})

router.get("/cadastro", (req, res) => {
  res.render("cadastro")
})

export default router