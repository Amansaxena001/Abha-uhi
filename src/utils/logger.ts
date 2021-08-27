import { setLogger } from 'react-query';
/* eslint-disable no-console */
const noop = () => {};

setLogger({
    log: console.log,
    warn: console.warn,
    error: console.warn
});

const consoleMethods = Object.keys(console);

const logger: any = consoleMethods.reduce(
    (loggerObject, method) => ({
        ...loggerObject,
        [method]: process.env.NODE_ENV ? console[method] : noop
    }),
    {}
);

export const createLogger = tag => {
    return {
        log: (...logs) => logger.log(tag, ...logs),
        error: (...logs) => logger.error(tag, ...logs)
    };
};

export default logger;
