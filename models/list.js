var orm = require('../config/orm');

var item = {
    all: function (cb) {
        orm.all('items', function (res) {
            cb(res);
        })
    },
    //UPDATE
    update: function (id, cb) {
        orm.update('items', id, cb);
    },
    //CREATE
    create: function (name, cb) {
        orm.create('items', name, cb);
    },
    //DELETE
    delete: function (name, cb) {
        orm.delete('items', name, cb);
    }
}

module.exports = item;