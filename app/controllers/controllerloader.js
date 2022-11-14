const { request } = require("express");

exports.home = (req, res, next) => {
    req.session.name = 'new id';
    req.session.myIdd = 'new idd';
    var request = {
       session : {
           name : 'new id',
           myIdd : 'new idd'
       }

    };

    

    const {name, myIdd} = request.session;

    console.log(name);

    return res.render('asd', {name: ['not name', 'very cool name', 'hello']});

}

exports.testSession = (req, res, nex) => {
    return res.send(req.session);
}