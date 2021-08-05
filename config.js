const environments = {}

environments.dev = {
    httpPort: 3000,
    httpsPort: 3001,
    envName: 'dev',
    hashingSecret: 'qwertyuiopasdfghjklzxcvbnm',
}

environments.production = {
    httpPort: 5000,
    httpsPort: 5001,
    envName: 'production',
    hashingSecret: 'folrLFLHR4yh8g$KhmS#mV018Aznbo5tYy!5',
}

const currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV.toLowerCase() : '';
const exportableEnvName = typeof environments[currentEnv] === 'object' ? currentEnv : 'dev';

module.exports = environments[exportableEnvName];