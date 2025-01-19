export const emailCreator = (name: any = "user", roleCode: string) => {
  if (name && roleCode) {
    name = name.toLowerCase().replace(/[^a-z0-9]/gi, "");
    roleCode = roleCode.toLowerCase();
  }
  return name && roleCode ? `${name}@${roleCode}.com` : null;
};
