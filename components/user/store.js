const Model = require('./model');


async function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function getUsers(filterUser) {
    let filter = {};
    if(filterUser !== null) {
        filter = {user: filterUser };
    }
    const users = await Model.find(filter);
    return users;
}


async function removeUser(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addUser,
    remove: removeUser,
    list: getUsers
}