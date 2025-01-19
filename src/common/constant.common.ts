export const ROLES = {
  ADMIN: "ADMIN",
  SUBADMIN: "SUBADMIN",

  // COMPANY: "COMPANY",
  CFA: "CFA",
  SUPERSTOCKIEST: "SUPERSTOCKIEST",
  DISTRIBUTOR: "DISTRIBUTOR",
  RETAILER: "RETAILER", // can make request for registration.

  NSM: "NSM",
  ZSM: "ZSM",
  RSM: "RSM",
  STATE_HEAD: "STATE_HEAD",
  ASM: "ASM",
  ASE: "ASE",
  SO: "SO",
  PSR: "PSR",
} as const;
export type ROLES_TYPE = keyof typeof ROLES;

export const REPORT_STATUS = {
  ENQUEUED: "ENQUEUED",
  PROCESSING: "PROCESSING",
  PROCESSED: "PROCESSED",
} as const;
export type REPORT_STATUS_TYPE = keyof typeof REPORT_STATUS;

export const REPORT_TYPE = {
  STOCK_AND_SALES_REPORT: "STOCK_AND_SALES_REPORT",
  EMPLOYEE_PRODUCTIVITY: "EMPLOYEE_PRODUCTIVITY",
  ORDER_LIST: "ORDER_LIST",
  CURRENT_STOCK_LIST: "CURRENT_STOCK_LIST",
  ACTIVITY: "ACTIVITY",
  LOCATION: "LOCATION",
  ATTENDANCE_DETAILED: "ATTENDANCE_DETAILED", //ATTENDANCE DETAILED REPORT
  ATTENDANCE_SUMMARY: "ATTENDANCE_SUMMARY",
  OUTLET_WISE_SALES: "OUTLET_WISE_SALES",
  FLAT_SUMMARY: "FLAT_SUMMARY",
  SALES_TAGS: "SALES_TAGS",
  BRAND_TAGS: "BRAND_TAGS",
  BEAT_TAGS: "BEAT_TAGS",
  DISTRIBUTOR_TAG: "DISTRIBUTOR_TAG",
} as const;
export type REPORT_TYPE_TYPE = keyof typeof REPORT_TYPE;

export const ROLE_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
export type ROLE_STATUS_TYPE = keyof typeof ROLE_STATUS;

export const CREANDO = "CREANDO";
export type ORDER_SELLER_TYPE = keyof typeof ROLES | typeof CREANDO;

export const TAG_TYPE = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
} as const;
export type TAG_TYPE_TYPES = keyof typeof TAG_TYPE;

export const APPROVE_STATUS = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  DENIED: "DENIED",
} as const;
export type APPROVE_STATUS_TYPE = keyof typeof APPROVE_STATUS;

export const VERIFICATION_STATUS = {
  VERIFIED: "VERIFIED",
  REJECTED: "REJECTED",
} as const;
export type VERIFICATION_STATUS_TYPE = keyof typeof VERIFICATION_STATUS;

/** For Primary beat tagging only these roles are allowed */
export const ROLES_FOR_PRIMARY_BEAT_TAGGING = [ROLES.PSR, ROLES.SO] as const;

export const ATTENDANCE_STATUS = {
  IN: "IN",
  OUT: "OUT",
  LEAVE: "LEAVE",
  RESTART: "RESTART",
} as const;
export type ATTENDANCE_STATUS_TYPE = keyof typeof ATTENDANCE_STATUS;

/*
 *Type of order return or placed
 */
export const ORDER_TYPE = {
  RETURN: "RETURN",
  NORMAL: "NORMAL",
} as const;
export type ORDER_TYPE_TYPE = keyof typeof ORDER_TYPE;

/**
 * order status
 */
export const ORDER_STATUS = {
  INITIATED: "INITIATED",
  ACCEPTED: "ACCEPTED",
  DENIED: "DENIED",
  DISPATCHED: "DISPATCHED", //check stock
  DELIVERED: "DELIVERED",
  CANCELED: "CANCELED",
  RETURNED: "RETURNED",
} as const;
export type ORDER_STATUS_TYPE = keyof typeof ORDER_STATUS;

export const CANCELLED_BY = {
  SELLER: "SELLER",
  BUYER: "BUYER",
} as const;
export type CANCELLED_BY_TYPE = keyof typeof CANCELLED_BY;

export const ORDER_UPDATE_STATUS = {
  REJECTED: "REJECTED",
  REQUESTED: "REQUESTED",
  APPROVED: "APPROVED",
} as const;
export type ORDER_UPDATE_STATUS_TYPE = keyof typeof ORDER_UPDATE_STATUS;

export const STOCK_UPDATE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CLOSING_STOCK: "CLOSING_STOCK",
  OPENING_STOCK: "OPENING_STOCK",
  UPLOADED: "UPLOADED",
} as const;
export type STOCK_UPDATE_TYPE = keyof typeof STOCK_UPDATE;

export const SALES_APP_LOGIN = [
  ROLES.NSM,
  ROLES.ZSM,
  ROLES.RSM,
  ROLES.STATE_HEAD,
  ROLES.ASM,
  ROLES.ASE,
  ROLES.SO,
  ROLES.PSR,
  ROLES.ADMIN,
];

export const OBJECTIVE = {
  RETAILING: "Retailing",
  JOINT_WORKING: "Joint Working",
  MEETING: "Meeting",
  DISTRIBUTOR_SEARCH: "Distributor Search",
  DISTRIBUTOR_VISIT: "Distributor Visit",
  OTHERS: "Others",
} as const;
export type OBJECTIVE_TYPE = keyof typeof OBJECTIVE;

export const LOCATION_PURPOSE = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  START_SALESCALL: "START_SALESCALL",
  END_SALESCALL: "END_SALESCALL",
  MOVING: "MOVING",
  LEAVE: "LEAVE",
  START_OBJECTIVE: "START_OBJECTIVE",
  END_OBJECTIVE: "END_OBJECTIVE",
} as const;
export type LOCATION_PURPOSE_TYPE = keyof typeof LOCATION_PURPOSE;

export const PAYMENT_COLLECTION = {
  CHECK: "CHECK",
  UPI: "UPI",
  CASH: "CASH",
} as const;
export type PAYMENT_COLLECTION_TYPE = keyof typeof PAYMENT_COLLECTION;

export const SALES_CALL_REPORT = {
  YTD: "YTD",
  MTD: "MTD",
} as const;
export type SALES_CALL_REPORT_TYPE = keyof typeof SALES_CALL_REPORT;

export const TARGET_STATUS = {
  ONGOING: "ONGOING",
  ENDED: "ENDED",
} as const;
export type TARGET_STATUS_TYPE = keyof typeof TARGET_STATUS;

export const TARGETS = {
  PRODUCTIVE_SALES_CALL: "PRODUCTIVE_SALES_CALL",
} as const;
export type TARGETS_TYPE = keyof typeof TARGETS;

export const PJP_STATUS = {
  EXPIRED: "EXPIRED",
  VALID: "VALID",
} as const;
export type PJP_STATUS_TYPE = keyof typeof PJP_STATUS;

export const CART_QUANTITY = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SET: "SET",
} as const;
export type CART_QUANTITY_TYPE = keyof typeof CART_QUANTITY;
