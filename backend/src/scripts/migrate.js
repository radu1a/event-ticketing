
import sequelize from '../config/database.js';
import migrator from '../config/migrator.js';

try {
  await sequelize.authenticate();

  await migrator.up();

  console.log('Migrations completed successfully.');
} catch (error) {
  console.error('Migration failed:', error);
  process.exitCode = 1;
} finally {
  await sequelize.close();
}
