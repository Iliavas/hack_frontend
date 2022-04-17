export interface ParticipateInSession {
  isAutomate: boolean,
  lastBid: number,
  automateSettings: {
    minBid: number
  },
  session: number,
  lastBidProfile: number,
  id: number
}

export interface Company {
  name: string;
  id: number;
}

export interface ICompetence {
  name: string;
  id: number;
}

export interface IProfile {
  company: number,
  competence: number[],
  id: number
}

export interface ISession {
  name: string;
  description: string;
  docs: string;
  company: number;
  status: string;
  competetion: number;
  id: number
}

export interface IParticipateInSession {
  isAutomate: boolean,
  lastBid: number,
  automateSettings: {
    minBid: number
  },
  session: number,
  lastBidProfile: number,
  id: number
}