import app from './app.js';
import sequelize from './config/database.js';
import logger from './utils/logger.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();

    logger.info('DB', 'PostgreSQL connection established successfully');

    app.listen(PORT, '0.0.0.0', () => {
      logger.info('BACKEND', `Server running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('BACKEND', `Failed to start server: ${error.message}`);
    process.exit(1);
  }
}

startServer();