/* eslint max-lines-per-function: 0 */
export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  Task.associate = ({ User }) => {
    Task.User = Task.belongsTo(User, {
      as: 'user',
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });
  };

  return Task;
};
