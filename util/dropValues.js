const sequelize = require("../util/database");

async function clearDatabase() {
  try {
    // Get a list of all table names in the database
    const tableNames = await sequelize.query('SHOW TABLES;', { type: sequelize.QueryTypes.SHOWTABLES });

    // Loop through the table names and delete all rows from each table
    for (const tableName of tableNames) {
      await sequelize.query(`DELETE FROM ${tableName};`);
    }

    console.log('Database cleared successfully!');
  } catch (err) {
    console.error('Error clearing database:', err);
  }
}

clearDatabase();
