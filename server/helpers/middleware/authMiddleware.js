import { verifyToken } from '../../utils/jwtUtils.js';

// eslint-disable-next-line consistent-return
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // jwt = header + payload + signature
  // we are fetching payload
  const token = authHeader && authHeader.split('.')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  // verifing token
  const user = verifyToken(authHeader);
  if (!user) {
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
  req.user = user;
  next();
};

export default authenticateToken;
