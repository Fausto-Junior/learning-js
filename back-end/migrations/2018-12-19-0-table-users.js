const table = {
    tableName: 'users',
  }
  
  module.exports = {
    up(queryInterface, Sequelize) {
      return queryInterface.createTable(table, {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        login: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true,
        },
        password: {
            type: Sequelize.STRING(60),
            allowNull: false,
          },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE,
      })
    },
    down(queryInterface) {
      return queryInterface.dropTable(table)
    },
  }