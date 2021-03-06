const Users = require('../modles/Users');
exports.UsersController = {

    getUsers(req, res) {
        Users.find({})
            .then(Users => { res.json(Users); })
            .catch(err => res.send(`Error Getting user from db:${err}`));
    },

    deleteUser(req, res) {
        Users.deleteOne({ Id: req.params.id })
            .then((result) => {
                if (result.deletedCount > 0) { res.status(200).res.send(`user--${req.params.id}--deleted`); }
                else { res.status(400).res.send(`user--${req.params.id}--not in the data`); }
            })
            .catch(() => res.status(400).send(`Error user ${req.params.id} not deleted`))
    },

    getUser(req, res) {
        Users.findOne({ Id: req.params.id })
            .then((user) => {
                if (user) {
                    res.json(user);
                }
                else {
                    res.status(400).json("Wrong user id please enter correct id");
                }
            })
            .catch(err => res.send(`Error Getting user from db:${err}`));
    },

    getFamily(req, res) {
        Users.find({})
            .then(Users => { res.json(Users.filter(users => users.IdFamily == req.params.id)); })
            .catch(err => res.send(`Error Getting user from db:${err}`));
    },

    updateUser(req, res) {
        Users.updateOne({ Id: req.params.id }, req.body)
            .then((result) => {
                if (result.matchedCount > 0) { res.send(`user ${req.params.id} Updated!`); }
                else { res.status(400).send(`user ${req.params.id} Not in The DB!`); }
            })
            .catch((err) => res.status(400).json(err));
    },

    postUser(req, res) {//register      
        const { FullName, Password, Email, Role, BudgetLimit, Income } = req.body;
        Users.findOne().sort('-Id').exec((err, user) => {
            Users.findOne().sort('-IdFamily').exec((err, family) => {
                const newuser = new Users({
                    "Id": user.Id + 1,
                    "FullName": FullName,
                    "Password": Password,
                    "BudgetLimit": BudgetLimit,
                    "Email": Email,
                    "Role": Role,
                    "Income": Income,
                    "IdFamily": family.IdFamily + 1
                });
                const result = newuser.save();
                if (result) {
                    res.json(newuser.IdFamily);
                }
                else { res.status(404).send("error saving a user"); }
            });
        });
    },

    addfamily(req, res) {//register
        const { FullName, Password, Email, Role, BudgetLimit, Income, Idfamily } = req.body;
        Users.findOne().sort('-Id').exec((err, user) => {
            const newuser = new Users({
                "Id": user.Id + 1,
                "FullName": FullName,
                "Password": Password,
                "BudgetLimit": BudgetLimit,
                "Email": Email,
                "Role": Role,
                "Income": Income,
                "IdFamily": Idfamily
            });
            const result = newuser.save();
            if (result) {
                res.json(user);
            }
            else { res.status(404).send("error saving a user"); }
        });
    }
}