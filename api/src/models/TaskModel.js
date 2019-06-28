const Sequelize = module.require('sequelize');
const { Model } = module.require('sequelize');

class Task extends Model {
  static associate(models) {
    Task.User = Task.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });
  }
}

module.exports = sequelize => {
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
