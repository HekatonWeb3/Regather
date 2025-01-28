import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../declarations/backend";
export const createBackendActor = async () => {
  const agent = new HttpAgent({
    host: "http://127.0.0.1:4943", // URL backend lokal dfx
  });

  // Di lingkungan lokal, gunakan fetchRootKey untuk menghindari validasi sertifikat
  if (process.env.NODE_ENV === "development") {
    await agent.fetchRootKey();
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
};

export const backendActor = await createBackendActor();
