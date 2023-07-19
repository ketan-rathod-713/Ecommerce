const { User } = require("../model/User");


exports.createUser = async (req, res)=>{

    const user = new User(req.body);
    try{
        const response = await user.save();
        res.status(201).json({email: response.email, addresses: response.addresses, role: response.role, orders: response.orders});
    } catch (err){
        res.status(400).json(err);
    }
}

exports.loginUser = async (req, res)=>{

    try{
        const user = await User.findOne({email:req.body.email}).exec();
        console.log(user);  
        // this is just temporary 
        if(!user){
            res.status(401).json({message: "No such user found"});
        } else
        if(user.password === req.body.password){
            // TODO : we will make addresses independent from login
            res.status(201).json({id: user.id, email: user.email, name: user.name, addresses: user.addresses, role: user.role});
        } else {
            res.status(401).json({message: "invalid credentials"});
        }
    } catch (err){
        res.status(400).json(err);
    }
}
// 8.24