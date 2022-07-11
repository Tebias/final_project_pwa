const { User } = require ("../models");



const handleLogin = async (req,res)=>{
    const { email, password } = req.body;

    if(!email || !password)
        return res.json({
            error: "Fields Require"
        });

    const user = await User.customFindOne({ email });

    if (!user)
        return res.json({
            error: "user not registered"
        });

    if (password !== user.password)
        return res.json({
            error: "password incorrect"
        });


    const token = "asdasdasd"; // JWT Here!

    
    return res.json({
        message:"user login succesfully",
        body:{
            token
        }
    });
}


const handleRegister = async (req,res)=>{
    
    const {name, email, password, avatar, image } = req.body;

    if(!name || !email || !password || !avatar || !image)
        return res.json({
            error: "Fields require"
        });

    try{

        const user = await User.customCreate({ //User saved in DB
            name,
            email,
            password, //TENGO QUE ENCRIPTAR LA CONTRASEÑA
            avatar,
            image
        });

        delete user.password; //delete pass for showing it in body

        return res.json({
            message: "User registered",
            body: user //Aqui debería devolver un ID para saber que se ha creado exitosamente
        })

    }catch(error){
        return res.json({
            error
        })
    }
    
};


module.exports = {
    handleLogin,
    handleRegister
}