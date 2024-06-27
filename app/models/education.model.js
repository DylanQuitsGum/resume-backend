module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("education", {
      institutionName: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      beginDate:{
        type: Sequelize.DATEONLY
      },
      endDate: {
        type: Sequelize.DATEONLY
      },
      degreeAwardDate:{
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
  
    return Education;
  };