const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
// Get token from "Authorization: Bearer <token>"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Remove "Bearer"
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret); // Verify token
    req.user = decoded; // Attach user data (e.g., id) to request
    next(); // Token is valid, go to next step
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' }); // Use 401
  }
}
module.exports= verifyToken;