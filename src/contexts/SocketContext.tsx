import { Message, Messages, Rooms } from "../interface/socket.io";
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
  roomId: string;
  rooms: Rooms;
  messages: Messages;
}

type SocketAction =
  | { type: "CONNECT"; payload: boolean }
  | { type: "GET_ROOM_LIST"; payload: Rooms }
  | { type: "JOIN_ROOM"; payload: string }
  | { type: "SAVE_MESSAGE"; payload: Message };

const URL = import.meta.env.VITE_API_URI;
// const URL = "http://localhost:4000";
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);

const defaultSocketState: SocketState = {
  isConnected: false,
  socket: socket,
  rooms: {},
  messages: [],
  roomId: "",
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
    case "JOIN_ROOM": {
      return {
        ...state,
        roomId: action.payload,
      };
    }
    case "SAVE_MESSAGE": {
      return {
        ...state,
        messages: [...state.messages, action.payload],
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
  const [state, dispatch] = useReducer(socketReducer, {
    ...defaultSocketState,
    socket: socket,
  });

  return (
    <SocketStateContext.Provider value={state}>
      <SocketDispatchContext.Provider value={dispatch}>
        <Outlet />
      </SocketDispatchContext.Provider>
    </SocketStateContext.Provider>
  );
};

export default SocketProvider;
