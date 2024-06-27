module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      commentText: {
        type: Sequelize.STRING
      }
    });
  
    return Comment;
  };