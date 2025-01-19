export const COLLECTION = {
  USERS: "users",
} as const;
export type COLLECTION_TYPE = keyof typeof COLLECTION;
