import { Socket, io } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../interface/socket.io";

const URL = "http://localhost:4000";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
  io(URL);
// export const socket: Socket = io(URL);
