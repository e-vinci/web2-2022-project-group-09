const db = require('./db_conf');

module.exports.get = (userId) => db.prepare("SELECT point,nbeGameJoue,moyennErreur FROM users WHERE id_user = ?").all(userId);

module.exports.addPoint = (nbePoint,nbeErreu,user) => {
    const stmt = db.prepare("UPDATE users SET point = ? , nbeGameJoue=(nbeGameJoue+1) , moyennErreur = (moyennErreur + ?) WHERE id_user = ? ");
    const info = stmt.run(nbePoint,nbeErreu,user);
    return info.changes;
}

// show top 10
module.exports.getMorePoints = () => db.prepare("SELECT login, point FROM users ORDER BY point DESC LIMIT 10").all();

// show top 3
module.exports.getTop3 = () => db.prepare("SELECT login, point FROM users ORDER BY point DESC LIMIT 3").all();
