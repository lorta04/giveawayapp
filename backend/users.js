const router = require('express').Router();
const jwt = require('jsonwebtoken')
const Schema = require('mongoose').Schema;
let User = require('./user.model');


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
    //console.log('dd')
  

});

router.route('/add').post((req, res) => {
  const user = req.body;
  //console.log(user)
  const newUser = new User(user);
  
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).send(err));
});

router.route('/login').post((req,res) => {
    const {user,passwd} = req.body
    //console.log(req.body)
        User.find({'username':{$eq:user}}).then((data)=>{
      //console.log(data)
      if(data.length<1) return res.send({user:"usernotfound"})
      else {
        data = data[0]
        //console.log(data._doc.password,passwd)
        if(data._doc.password && data._doc.password === passwd) {
        const datapack = {username:data.username,twittername:data.twittername}
        const dd = jwt.sign(datapack,'secret')
        //console.log(dd)
        res.status(200).send(dd)
        }else {
          res.send({user:"incorrectpass"});
        }
      }
    })
})

module.exports = router;