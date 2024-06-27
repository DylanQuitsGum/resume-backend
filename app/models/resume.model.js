module.exports = (sequelize, Sequelize) => {
    const Resume = sequelize.define("resume", {
      resumeText: {
        type: Sequelize.STRING
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
  
    return Resume;
  };