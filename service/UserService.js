import mongoose from "mongoose"
import user from "../models/User.js"

const User = mongoose.model("User", user)

class UserService{
  selectOne(email){
    const user = User.findOne({ email: email })
    return user
  }

  Create(email, password){
    const novoUser = new User({
      email: email,
      password: password
    })

    novoUser.save()
  }
}

export default new UserService()