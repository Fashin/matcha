const mysql		= require('mysql');

var database;

database = mysql.createPool({
    host     : 'vps232468.ovh.net',
    user     : 'admin_camagrure',
    password : 'XFI3lz1BuB',
    database : 'admin_camagru',
    port     : 3306
});


module.exports = database;
