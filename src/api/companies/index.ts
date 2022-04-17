import { get } from "../fetch";

export async function getCompanies() {
  return await get("/api/companies");
}
export async function getCompany(id: string) {
  return await get("/api/companies/"+id);
}