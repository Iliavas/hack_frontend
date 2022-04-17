import { get } from "../fetch";

export async function getCompetences() {
  return await get("/api/competence");
}

export async function getCompetence(id: string) {
  return await get("/api/competence/"+id);
}