module.exports = (sequelize, Sequelize) => {
    const Employer = sequelize.define("employer", {
      employerName: {
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
      salary:{
        type: Sequelize.DECIMAL
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
  
    return Employer;
  };