import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/sessions", () => [
      {
        name: "Котировочная сессия 1",
        description: "Описание котировочной сессии",
        docs: null,
        company: 1,
        status: "COMPLETED",
        productAmount: 3,
        competention: 3,
        id: 1
      }
    ]);
    this.get("/api/competence", () => [
      {
        name: "Продажа бумаги",
        id: 3
      }
    ]);
    this.get("/api/companies", () => [
      {
        name: "Рога и копыта",
        id: 1
      }
    ]);
    this.get("/api/potential-sessions?competence=3", () => [
      {
        name: "Продажа бумаги",
        id: 3
      }
    ]);
    this.get("/api/profile", () => {
      return {
        company: 1,
        competence: [3],
        id: 1
      }
    });
    this.get("/api/sessions/1", () => {
      return {
        name: "Котировочная сессия 1",
        description: "Описание котировочной сессии",
        docs: null,
        company: 1,
        status: "ARCHIEVE",
        productAmount: 3,
        competention: 3,
        id: 1
      }
    });
    this.get("/api/companies/1", () => {
      return {
        name: "Рога и копыта",
        id: 1
      }
    });
    this.get("/api/participation-in-session", () => [
      {
        isAutomate: false,
        lastBid: 1.37,
        automateSettings: {
          minBid: 0.45
        },
        session: 1,
        lastBidProfile: 1,
        id: 1
      }
    ]);
    this.get("/api/participate-in-session/1", () => {
      return {
        isAutomate: false,
        lastBid: 1.37,
        automateSettings: {
          minBid: 0.45
        },
        session: 1,
        lastBidProfile: 1,
        id: 1
      }
    })
    this.post("/api/participation-in-session/1", (schema, request) => {
      return {
        isAutomate: false,
        lastBid: 1.37,
        automateSettings: {
          minBid: 0.45
        },
        session: 1,
        lastBidProfile: 1,
        id: 1
      };
    });
    this.put("/api/participation-in-session", (schema, request) => {
      return {
        isAutomate: false,
        lastBid: 1.37,
        automateSettings: {
          minBid: 0.45
        },
        session: 1,
        lastBidProfile: 1,
        id: 1
      }
    });
    this.get("/api/competence/3", () => {
      return {
        name: "Продажа бумаги",
        id: 3
      }
    })
  }
})