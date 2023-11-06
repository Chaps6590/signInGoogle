const {response} = require('express');
const { validarGoogleId } = require('../helpers/google-verify-token');


const googleAuth = async (req, res = response)=>{


    const token = req.body.token;
    
    if(!token){
        return res.json({
            ok:false,
            msg:"No hay token."
        })
    }

    const googleUser = await validarGoogleId(token);

    if  (!googleUser){
        return res.status(400).json({
            ok:false
        })
    }

    res.json({
        ok:true,
        token,
        googleUser
    })


}

module.exports = {
    googleAuth
}