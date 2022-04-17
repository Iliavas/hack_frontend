import { get } from "../fetch";

export async function getProfile() {
  return await get("/api/profile");
}