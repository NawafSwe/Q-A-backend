/**
 * @const
 * @type {number}
 * @namespace PORT
 * @description port number for the server
 */
export const PORT: number = Number(process.env.PORT) || 6060;

/**
 * @const
 * @type {number | string}
 * @namespace HOST
 * @description host number for the server
 */

export const HOST: string = String(process.env.HOST) || 'localhost';

/**
 * @const
 * @type {string}
 * @namespace MONGO_URI
 * @description Mongo uri for the database
 */
export const MONGO_URI: string = String(process.env.MONGO_URI);
