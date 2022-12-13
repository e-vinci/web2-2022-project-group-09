const db = require('./db_conf');

module.exports.get = (userId) => db.prepare("SELECT point,nbeGameJoue,moyennErreur FROM users WHERE id_user = ?").all(userId);

module.exports.addPoint = (nbePoint,nbeErreu,user) => {
    const stmt = db.prepare("UPDATE users SET point = ? , nbeGameJoue=(nbeGameJoue+1) , moyennErreur = (moyennErreur + ?) WHERE id_user = ? ");
    const info = stmt.run(nbePoint,nbeErreu,user);
    return info.changes;
}






module.exports.getMorePoints = () => db.prepare("SELECT login, point FROM users ORDER BY point DESC LIMIT 10").all();


module.exports.getFirst = () =>
 db.prepare("SELECT * FROM(SELECT ROW_NUMBER() OVER (ORDER BY point DESC ) AS row_num, login, point FROM users) WHERE row_num =1").all();


 module.exports.getSeconde = () =>
 db.prepare("SELECT * FROM(SELECT ROW_NUMBER() OVER (ORDER BY point DESC ) AS row_num, login, point FROM users) WHERE row_num =2").all();


 module.exports.getThird = () =>
 db.prepare("SELECT * FROM(SELECT ROW_NUMBER() OVER (ORDER BY point DESC ) AS row_num, login, point FROM users) WHERE row_num =3").all();

