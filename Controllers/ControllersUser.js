const { request,response } = require("express");
const dataUser  = require('../requette/requette.js')


const ControlUser = class{
    static AddUser  =async (req = request , res = response)=>{
        dataUser.AddUser('gsgwfh')

  
    }

}

module.exports = ControlUser




