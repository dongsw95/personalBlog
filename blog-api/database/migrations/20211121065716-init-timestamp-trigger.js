'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize
      .query(
        `CREATE OR REPLACE FUNCTION "update_timestamp"()
      RETURNS TRIGGER AS $$
      BEGIN
      NEW.update_time = now();
      RETURN NEW;
      END;
      $$ language 'plpgsql';`
      )
      .then(async () => {
        await queryInterface.sequelize.query(`CREATE OR REPLACE FUNCTION "create_timestamp"()
      RETURNS TRIGGER AS $$
      BEGIN
      NEW.create_time = now();
      RETURN NEW;
      END;
      $$ language 'plpgsql';`);
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
