const Users = require('../modles/Users');
exports.UsersController = {

    getUsers(req, res) {
        Users.find({})
            .then(Users => { res.json(Users); })
            .catch(err => console.log(`Error Getting user from db:${err}`));
    },
    
    deleteUser(req, res) {
        Users.deleteOne({ id: req.params.id })
            .then((result) => {
                if (result.deletedCount > 0) {res.send(`user--${req.params.id}--deleted`);}
                else {res.status(400).res.send(`user--${req.params.id}--not in the data`);}
            })
            .catch(() => res.status(400).send(`Error user ${req.params.id} not deleted`))
    },

    getUser(req, res) {
        Users.findOne({ id: req.params.id })
            .then((user) => {
                if (user) {
                    res.json(user);
                }
                else{
                    res.status(400).json("Wrong user id please enter correct id");
                }

            })
            .catch(err => console.log(`Error Getting user from db:${err}`));
    },

    updateUser(req,res){
        Users.updateOne({ id: req.params.id },req.body)
        .then((result) => {
            if (result.matchedCount > 0){res.send(`user ${req.params.id} Updated!`);}
            else{res.status(400).send(`user ${req.params.id} Not in The DB!`);}
        })
        .catch((err) => res.status(400).json(err));
    },

    postUser(req,res){//register
        const {fullName,Password, Email, role,BudgetLimit } = req.body;
        Users.findOne().sort('-id').exec((err,user)=>{
            Users.findOne().sort('-IdFamily').exec((err,family)=>{
                const newuser=new Users({
                    "id":user.id+1,
                    "fullName": fullName,
                    "Password": Password,
                    "BudgetLimit": BudgetLimit,
                    "Email": Email,
                    "role": role,
                    "IdFamily":family.IdFamily+1
                    
            });
            const result=newuser.save();
            if(result){res.json(newuser)}
            else{res.status(404).send("error saving a user");}
            });
        });
    }
}