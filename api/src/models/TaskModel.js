import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static associate(models) {
    Task.User = Task.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });
  }
}

export default sequelize => {
  Task.init(
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize
    }
  );

  return Task;
};
