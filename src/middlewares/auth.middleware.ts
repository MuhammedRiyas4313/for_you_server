import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import { IUser, User } from "models/user.model";
import { CONFIG } from "common/config.common";
import { ROLES, ROLES_TYPE } from "common/constant.common";
// import { PERMISSIONS_STRINGS, SCOPE, SCOPE_TYPE, subadminCheck } from "common/permissions.common";
import { PERMISSIONS_STRINGS, SCOPE, SCOPE_TYPE } from "common/permissions.common";
import { ERROR } from "common/error.common";

/**
 * @description authorize all roles to use the route
 */

export const authorizeJwt: RequestHandler = async (req, res, next) => {
  // console.log(req.headers);

  const authorization = req.headers["authorization"];
  let token = authorization && authorization.split("Bearer ")[1];
  if (!token && typeof req.query.token == "string") {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  try {
    const decoded: any = jwt.verify(token, CONFIG.JWT_ACCESS_TOKEN_SECRET);
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Please Login And Try Again" });
  }
};

type subadminSelectorFn = (user?: IUser) => boolean | undefined | null;

/**
 * @description authorize specific roles to use the route
 */
export const authorizeRole =
  (role: ROLES_TYPE[], subAdminSelector: subadminSelectorFn = () => true) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers["authorization"];
    let token = authorization && authorization.split("Bearer ")[1];
    if (!token && typeof req.query.token == "string") {
      token = req.query.token;
    }

    if (!token) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    try {
      const decoded: any = jwt.verify(token, CONFIG.JWT_ACCESS_TOKEN_SECRET);
      if (!req.user?.userObj?.role || !role.includes(req.user.userObj.role)) {
        throw new Error("403 forbbiden");
      }

      if (req.user.userObj.role === ROLES.SUBADMIN) {
        const check = subAdminSelector(req.user.userObj);
        if (!check) {
          throw new Error("403 forbbiden");
        }
      }

      next();
    } catch (e) {
      console.error(e);
      res.status(403).json({ message: "You are not authorized to perform this action" });
    }
  };

/**
 * @description setting user obj for every request
 */
export const setUserAndUserObj: RequestHandler = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  let token = authorization && authorization.split("Bearer ")[1];
  if (!token && typeof req.query.token == "string") {
    token = req.query.token;
  }
  if (token) {
    try {
      const decoded: any = jwt.verify(token, CONFIG.JWT_ACCESS_TOKEN_SECRET);
      if (decoded) {
        req.user = decoded;
      }

      if (req.user) {
        req.user.userObj = await User.findById(decoded.userId).lean().exec();
      }
    } catch (e) {
      console.error(e);
      res.status(401).json({ message: "Invalid Token" });
      return;
    }
  }
  next();
};

// export const checkPermission = (requiredPermissionArr: PERMISSIONS_STRINGS[]) => {
//   //TODO
//   return (req: Request, res: Response, next: NextFunction) => {
//     type USER_ROLE = ROLES_TYPE | undefined;

//     try {
//       if (!req.user?.userObj) {
//         res.status(403).json({ message: "Forbidden" });
//         return;
//       }

//       const userRole: USER_ROLE = req.user?.userObj?.role;

//       if (userRole === ROLES.SUBADMIN && subadminCheck(requiredPermissionArr, req.user?.userObj)) {
//         // update expected value [string]
//         next();
//       } else if (
//         userRole &&
//         ROLES[userRole] &&
//         SCOPE[ROLES[userRole] as SCOPE_TYPE] &&
//         SCOPE[ROLES[userRole] as SCOPE_TYPE]
//       ) {
//         const permissionsArr = SCOPE[ROLES[userRole] as SCOPE_TYPE];

//         const haveAllAccess = requiredPermissionArr.every((permission: PERMISSIONS_STRINGS) =>
//           permissionsArr.includes(permission),
//         );

//         if (haveAllAccess) {
//           next();
//         } else {
//           res.status(403).json({ message: ERROR.ROLE.INSUFFICIENT_PERMISSION });
//           return;
//         }
//       } else {
//         res.status(403).json({ message: ERROR.ROLE.INSUFFICIENT_PERMISSION });
//         return;
//       }
//     } catch (error) {
//       console.error(error, "ERROR IN CHECK PERMISSION");
//       res.status(403).json({ message: ERROR.ROLE.INSUFFICIENT_PERMISSION });
//     }
//   };
// };
