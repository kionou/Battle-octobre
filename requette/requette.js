const { usercollection } = require("../database/data");



const dataUser = class{
    static AddUser  =async (into,authentification)=>{
        console.log('bonjour',into);

        // let email = authentification.email;
        // let password = authentification.password
        

        // return new Promise(async (next)=>{
        // await createUserWithEmailAndPassword(auth,email,password)
        //     .then(async (cred)=>{
        //         updateProfile(cred.user,{displayName: 'user'})
        //         await setDoc(doc(usercollection, cred.user.uid),into)
        //         .then(()=>{
        //             signOut(auth)
        //             next({success:"Enregistrer avec success"}) 
        //         })
        //         .catch((err)=>{
        //             console.log(err.message);
        //         })
                
        //     })
        //     .catch((err)=>{
        //         next ({ erreur:err.code})
        //     })
        
        //     })
    }

}



module.exports= dataUser