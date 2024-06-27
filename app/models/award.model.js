module.exports = (sequelize, Sequelize) => {
    const Award = sequelize.define("award", {
      awardName: {
        type: Sequelize.STRING
      },
      dateAwarded:{
        type: Sequelize.DATEONLY
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
    });
  
    return Award;
  };