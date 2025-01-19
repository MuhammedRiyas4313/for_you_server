import { ROLES } from "common/constant.common";

export const findRoleForId = (role: string) => {
  switch (role) {
    case ROLES.SUPERSTOCKIEST:
      return "SS";
    case ROLES.DISTRIBUTOR:
      return "DB";
    case ROLES.RETAILER:
      return "RT";
    case ROLES.STATE_HEAD:
      return "SH";
    case ROLES.ADMIN:
      return "AMN";
    case ROLES.SUBADMIN:
      return "SAMN";
    default:
      return role;
  }
};
