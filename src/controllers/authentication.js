const firebase = require("firebase");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(400).send({ error: err });
      });
  },
  async login(req, res) {
    const { email, password } = req.body;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        return res.json(user)
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
