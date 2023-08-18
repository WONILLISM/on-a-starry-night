import { SocketData, Rooms } from "../interface/socket.io";
import { Socket, io } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../interface/socket.io";
import { Dispatch, Reducer, createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";

interface SocketState {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
  isConnected: boolean;
  username?: string;
  chatdata?: SocketData;
  rooms: Rooms;
}

type SocketAction =
  | { type: "CONNECT"; payload: boolean }
  | { type: "GET_ROOM_LIST"; payload: Rooms };

const URL = "http://localhost:4000";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);

const defaultSocketState: SocketState = {
  isConnected: false,
  socket: socket,
  rooms: {},
};

const socketReducer: Reducer<SocketState, SocketAction> = (
  state: SocketState,
  action: SocketAction
) => {
  switch (action.type) {
    case "CONNECT":
      return {
        ...state,
        isConnected: true,
      };
    case "GET_ROOM_LIST": {
      return {
        ...state,
        rooms: action.payload,
      };
    }
    default: {
      throw "";
    }
  }
};

export const SocketStateContext =
  createContext<SocketState>(defaultSocketState);

export const SocketDispatchContext =
  createContext<Dispatch<SocketAction> | null>(null);

const SocketProvider = () => {
  // const [state, setState] = useState<SocketState>(defaultSocketState);
  const [state, dispatch] = useReducer(socketReducer, defaultSocketState);

  console.log(state);

  return (
    <SocketStateContext.Provider value={state}>
      <SocketDispatchContext.Provider value={dispatch}>
        <Outlet />
      </SocketDispatchContext.Provider>
    </SocketStateContext.Provider>
  );
};

export default SocketProvider;
