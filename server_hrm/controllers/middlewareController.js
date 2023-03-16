import Jwt from "jsonwebtoken";

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      Jwt.verify(accessToken, "secret", (err, employee) => {
        if (err) {
          res.status(403).json("Token is not valid");
        }
        req.employee = employee;
        next();
      });
    } else {
      res.status(401).json("You are not authenticated");
    }
  },
  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.employee.id == req.params.id || req.employee.position) {
        next();
      } else {
        res.status(403).json("You are not allowed to delete other");
      }
    });
  },
};
export default middlewareController;
