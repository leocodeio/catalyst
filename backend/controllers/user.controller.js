import User from "../models/user.model.js";


const signup=async (req, res) => {
  const { name, email, phone,password } = req.body;
  try{
    const user = new User({name,email,phone,password});
    await user.save();
    res.status(200).send("signup sucess");
  }catch(err){
    console.error("error while signing up",err);
    res.status(500).send("error while signing up");
  }
}

const login=async(req,res)=>{
  const {name,password}=req.body;
  try{
    const user=await User.findOne({name:name,password:password});
    if(!user){
      console.error("error while logging in,invalid credentials",err);
      res.status(401).send("error while logging in, invalid credentials");
    }
    res.status(200).send("login sucessful");
  }catch(err){
    console.error("error while logging in",err);
    res.status(500).send("error while logging in,internal error");
  }
}

export {signup,login};