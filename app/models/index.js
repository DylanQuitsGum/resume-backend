const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.education = require("../models/education.model.js")(sequelize,Sequelize);
db.employer = require("./employer.model.js")(sequelize, Sequelize);
db.award = require("../models/award.model.js")(sequelize, Sequelize);
db.skill = require("../models/skill.model.js")(sequelize, Sequelize);
db.resume = require("../models/resume.model.js")(sequelize, Sequelize);
db.comment = require("../models/comment.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.comment.belongsToMany(db.resume, {
  through: "resume_comments"
});
db.resume.belongsToMany(db.comment, {
  through: "resume_comments"
});

db.user.hasMany(
  db.education,
  { as: "education" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.education.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);

db.user.hasMany(
  db.employer,
  { as: "employer" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.employer.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);

db.user.hasMany(
  db.award,
  { as: "award" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.award.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);

db.user.hasMany(
  db.skill,
  { as: "skill" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.skill.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);

db.user.hasMany(
  db.resume,
  { as: "resume" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.resume.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);

db.user.hasMany(
  db.comment,
  { as: "comment" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.comment.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
