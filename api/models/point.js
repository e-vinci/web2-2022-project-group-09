const db = require('./db_conf');

module.exports.get = (userId) => db.prepare("SELECT point,nbeGameJoue,moyennErreur FROM users WHERE id_user = ?").all(userId);

module.exports.addPoint = (nbePoint,nbeErreu,user) => {
    const stmt = db.prepare("UPDATE users SET point = point + ? , nbeGameJoue=(nbeGameJoue+1) , moyennErreur = (moyennErreur + ?) WHERE id_user = ? ");
    const info = stmt.run(nbePoint,nbeErreu,user);
    return info.changes;
}

// show the 10 best score
module.exports.getRanking = () => db.prepare("SELECT login, point FROM users ORDER BY point DESC LIMIT 10").all();

// user stats
module.exports.getUserStats = (userId) => 
db.prepare("SELECT login,nbeGameJoue,moyennErreur,point FROM users WHERE id_user = ? ").all(userId);

