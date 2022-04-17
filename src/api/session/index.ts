import { get } from "../fetch";

export async function getSessions() {
  return await get("/api/sessions")
}

export async function getSession(id: string) {
  return await get("/api/sessions"+id);
}

export async function getPotentialSessions(potentialId: string) {
  return await get("/api/potential-sessions?competence="+potentialId);
}