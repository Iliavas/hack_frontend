import { ParticipateInSession } from "../../types";
import { get, post, put } from "../fetch";

export async function getParticipateInSessions() {
  return await get("/api/participate-in-session");
}

export async function postParticipateInSession(participateInSessionData: ParticipateInSession) {
  return await post("/api/participation-in-session/"+participateInSessionData.id, participateInSessionData);
}


export async function putParticipateInSession(participateInSessionData: ParticipateInSession) {
  return await put("/api/participate-in-session/", participateInSessionData);
}

export async function getParticipateInSession(id: string) {
  return await get("/api/participate-in-session/"+id);
}