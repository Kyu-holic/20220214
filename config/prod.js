// HEROKU에 넣을 때 MONGO_URI 이름을 같게 설정해야 함
module.exports = {
    mongoURI: process.env.MONGO_URI,
};
