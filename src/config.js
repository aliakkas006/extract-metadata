import { Sequelize } from 'sequelize';

const sequelizeConfig = {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'file_upload_db',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3306,
};

const sequelize = new Sequelize(sequelizeConfig);

export default sequelize;