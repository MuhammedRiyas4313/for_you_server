import { COLLECTION } from "common/collections.common";
import { ROLES_TYPE } from "common/constant.common";
import { Document, Schema, Types, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: ROLES_TYPE;
}

const userSchema = new Schema<IUser>(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>(COLLECTION.USERS, userSchema);
