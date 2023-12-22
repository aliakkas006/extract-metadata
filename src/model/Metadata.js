import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Metadata = sequelize.define('Metadata', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metadata: {
    type: DataTypes.TEXT,
  },
});

export default Metadata;
