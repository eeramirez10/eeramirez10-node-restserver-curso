const jwt = require('jsonwebtoken')

//======================
// Verificar Token
//======================

let verificaToken = ( req, res, next )=>{

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded)=>{
        
        if(err){
            return res.status(401).json({
                ok:false,
                err
            })
        }


        req.usuario = decoded.usuario;  
        next();

    })

  
}


let verificaAdmin_role = (req, res, next)=>{
    let usuario = req.usuario;

    if (usuario.role !== 'ADMIN_ROLE'){

        return res.json({
            ok:false,
            err:{
                message: 'el usuario no es administrador'
            }
        })
    }

    next();
}


module.exports = { verificaToken, verificaAdmin_role }