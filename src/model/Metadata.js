import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Metadata = sequelize.define('Metadata', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fileType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  textContent: {
    type: DataTypes.TEXT,
  },
  dimensions: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  createdDate: {
    type: DataTypes.DATE,
  },
});

export default Metadata;
