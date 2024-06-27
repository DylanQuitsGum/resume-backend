module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skill", {
      skillName: {
        type: Sequelize.STRING
      },
      skillLevel:{
        type: Sequelize.INTEGER
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
  
    return Skill;
  };