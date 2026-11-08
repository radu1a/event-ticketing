const timestamp = () => new Date().toISOString();

const log = (level, scope, message) => {
  console.log(
    `[${timestamp()}] [${level}] [${scope}] ${message}`
  );
};

const logger = {
  info: (scope, message) => log('INFO', scope, message),
  warn: (scope, message) => log('WARN', scope, message),
  error: (scope, message) => log('ERROR', scope, message),
  debug: (scope, message) => log('DEBUG', scope, message),
};

export default logger;