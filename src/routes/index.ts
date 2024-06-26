import { Express } from 'express';
import loginRoutes from './loginroutes';
import userRoutes from './userRoutes'
import commonRouted from './commonRoutes';


/**
 *
 * @param {Express} app - The Express app instance to configure.
 */

export function setupRoutes(app: Express) {
  app.use('/api', userRoutes);
  app.use('/api', loginRoutes);
  app.use('/common', commonRouted);
  // dfgfg
}
