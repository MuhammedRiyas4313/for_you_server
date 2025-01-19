import { IUser } from "models/user.model";
import mongoose, { Types } from "mongoose";

export const PERMISSIONS = {
  USER: {
    CREATE: "USER_CREATE",
    UPDATE: "USER_UPDATE",
    DELETE: "USER_DELETE",
    READ: "USER_READ",
  },
  REQUEST: {
    CREATE: "REQUEST_CREATE",
    DELETE: "REQUEST_DELETE",
    UPDATE: "REQUEST_UPDATE",
    READ: "REQUEST_READ",
  },
  TAG: {
    CREATE: "TAG_CREATE",
    UPDATE: "TAG_UPDATE",
    DELETE: "TAG_DELETE",
    READ: "TAG_READ",
  },
  ROLE: {
    CREATE: "ROLE_CREATE",
    UPDATE: "ROLE_UPDATE",
    DELETE: "ROLE_DELETE",
    READ: "ROLE_READ",
  },

  COMPANY: {
    CREATE: "COMPANY_CREATE",
    UPDATE: "COMPANY_UPDATE",
    DELETE: "COMPANY_DELETE",
    READ: "COMPANY_READ",
  },
  BRAND: {
    CREATE: "BRAND_CREATE",
    UPDATE: "BRAND_UPDATE",
    DELETE: "BRAND_DELETE",
    READ: "BRAND_READ",
  },
  CATEGORY: {
    CREATE: "CATEGORY_CREATE",
    UPDATE: "CATEGORY_UPDATE",
    DELETE: "CATEGORY_DELETE",
    READ: "CATEGORY_READ",
  },
  PRODUCT: {
    CREATE: "PRODUCT_CREATE",
    UPDATE: "PRODUCT_UPDATE",
    DELETE: "PRODUCT_DELETE",
    READ: "PRODUCT_READ",
  },
  //location
  COUNTRY: {
    CREATE: "COUNTRY_CREATE",
    UPDATE: "COUNTRY_UPDATE",
    DELETE: "COUNTRY_DELETE",
    READ: "COUNTRY_READ",
  },
  REGION: {
    CREATE: "REGION_CREATE",
    UPDATE: "REGION_UPDATE",
    DELETE: "REGION_DELETE",
    READ: "REGION_READ",
  },
  STATE: {
    CREATE: "STATE_CREATE",
    UPDATE: "STATE_UPDATE",
    DELETE: "STATE_DELETE",
    READ: "STATE_READ",
  },
  TOWN: {
    CREATE: "TOWN_CREATE",
    UPDATE: "TOWN_UPDATE",
    DELETE: "TOWN_DELETE",
    READ: "TOWN_READ",
  },
  BEAT: {
    CREATE: "BEAT_CREATE",
    UPDATE: "BEAT_UPDATE",
    DELETE: "BEAT_DELETE",
    READ: "BEAT_READ",
  },
} as const;
export type PERMISSIONS_TYPE = keyof typeof PERMISSIONS;

export type PERMISSIONS_STRINGS =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS][keyof (typeof PERMISSIONS)[PERMISSIONS_TYPE]]; // TO GET ALL PERMISSIONS STRINGS []

const permissionsArray = Object.values(PERMISSIONS).flatMap((obj) => Object.values(obj));

export const ADMIN = {
  PERMISSIONS: permissionsArray,
} as const;
export type ADMIN_PERMISSIONS_TYPE = keyof typeof ADMIN;

export const SCOPE = {
  ADMIN: ADMIN.PERMISSIONS,
} as const;
export type SCOPE_TYPE = keyof typeof SCOPE;

// export const subadminCheck = (
//   permissionsArr: PERMISSIONS_STRINGS[],
//   user:
//     | (mongoose.FlattenMaps<IUser> & {
//         _id: Types.ObjectId;
//       })
//     | null
//     | undefined,
// ) =>
//   !!user &&
//   permissionsArr.every((permission: PERMISSIONS_STRINGS) =>
//     user.accessArr.some((permissionObj) => permissionObj.accessType === permission),
//   );
