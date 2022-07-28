import User from '../models/User';

module.exports = {

    async store(req, res) {
        //const userStore = User.store();
    },

    async update(req, res) {
        //const userUpdate = User.update();
    },

    async show(req, res) {
        const userShow = await User.findOne();

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: userShow
            }
        )
    },

    async list(req, res) {
        const userList = await User.findAll();

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: userList
            }
        )
    },

    async delete(req, res) {
        //const userDelete = User.delete();
    }

}