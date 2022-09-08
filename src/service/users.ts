import { get } from "../utils/http"

export type User = {
  data?: [];
  status?: number | string
  statusText?: string;
};

export const fetchUsers = async () => {
  return await get("/users");
};
