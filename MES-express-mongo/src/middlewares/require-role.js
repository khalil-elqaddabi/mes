import { HttpError, notImplemented } from '../shared/http-error.js';
export function requireRole(...roles) {
  return function checkRole(req, res, next) {
    // MES 1 - TODO 
    if(!roles.includes(User.role)){
     throw new HttpError(403,'Acces interdit.')
    }
    throw notImplemented('MES 1 / controle du role');
  };
}
