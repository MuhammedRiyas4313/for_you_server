export const MESSAGE = {
  STOCK_LOG: {
    CREATED: "Successfully created Stock Log.",
    REMOVED: "Stock Log removed successfully.",
    GOTBYID: "Stock Log by id",
    UPDATED: "Successfully updated Stock Log.",
    ALLSTOCK_LOGS: "Stock Log List",
  },
  STOCK: {
    CREATED: "Successfully created Stock.",
    REMOVED: "Stock removed successfully.",
    GOTBYID: "Stock by id",
    UPDATED: "Successfully updated Stock.",
    ALLSTOCKS: "Stock List",
  },
  ORDER: {
    CREATED: "Thank you for your order! We've received it and it's being processed.",
    CANCELED: "Order cancellation confirmed. We've processed your request.",
    REMOVED: "Order removed successfully.",
    GOTBYID: "Order by id",
    UPDATED: "Successfully updated Order.",
    ALLORDERS: "Order List",
  },
  TAG: {
    CREATED: "Successfully created Primary Tag",
    REMOVED: "Primary Tag removed successfully.",
    GOTBYID: "Primary Tag by id",
    UPDATED: "Successfully updated Tag.",
    ALLTAGS: "Primary Tag List",
  },
  REQUEST: {
    CREATED: "Successfully added new request",
    VERIFIED: "User request verified successfully. A new user has been created and they can now use their account.",
    DENIED: "User request denied successfully.",
    REMOVED: "Request removed successfully.",
    GOTBYID: "Request by id",
    ALLREQUESTS: "Requests List",
  },
  USER: {
    CREATED: "Successfully added new User.",
    UPDATED: "Successfully updated User.",
    LOGGED_IN: "LogIn Successfully",
    GOTBYID: "User by id",
    GETCOUNT: "User Count",
    ALLUSERS: "Users List",
  },
  COMPANY: {
    CREATED: "Successfully added new Company.",
    UPDATED: "Successfully updated Company.",
    GOTBYID: "Company by id",
    ALLCOMPANIES: "Companies List",
    REMOVED: "Comapany removed successfully.",
  },
  BRAND: {
    CREATED: "Successfully added new Brand.",
    UPDATED: "Successfully updated Brand.",
    GOTBYID: "Brand by id",
    ALLBRANDS: "Brands List",
    REMOVED: "Brand removed successfully.",
  },
  CATEGORY: {
    CREATED: "Successfully added new Category.",
    UPDATED: "Successfully updated Category.",
    GOTBYID: "Category by id",
    ALLCATEGORY: "Categories List",
    REMOVED: "Category removed successfully.",
  },
  PRODUCT: {
    CREATED: "Successfully added new Product.",
    UPDATED: "Successfully updated Product.",
    GOTBYID: "Product by id",
    GOTBYSKU_CODE: "Product by SKU Code",
    ALLPRODUCTS: "Products List",
    REMOVED: "Product removed successfully.",
  },
  //LOCATION
  COUNTRY: {
    CREATED: "Successfully added new Country.",
    UPDATED: "Successfully updated Country.",
    REMOVED: "Country removed successfully.",
    GOTBYID: "Country by id",
    ALLCOUNTRIES: "Countries List",
  },
  REGION: {
    CREATED: "Successfully added new Region.",
    UPDATED: "Successfully updated Region.",
    REMOVED: "Region removed successfully.",
    GOTBYID: "Region by id",
    ALLREGIONS: "Region List",
  },
  STATE: {
    CREATED: "Successfully added new State.",
    UPDATED: "Successfully updated State.",
    REMOVED: "State removed successfully.",
    GOTBYID: "State by id",
    ALLSTATES: "States List",
  },
  TOWN: {
    CREATED: "Successfully added new Town.",
    UPDATED: "Successfully updated Town.",
    REMOVED: "Town removed successfully.",
    GOTBYID: "Town by id",
    ALLTOWNS: "Towns List",
  },
  BEAT: {
    CREATED: "Successfully added new Beat.",
    UPDATED: "Successfully updated Beat.",
    REMOVED: "Beat removed successfully.",
    GOTBYID: "Beat by id",
    ALLBEATS: "Beats List",
  },
} as const;
export type MESSAGE_TYPE = keyof typeof MESSAGE;
