import { useContext, useEffect } from "react";
import {
  SocketDispatchContext,
  SocketStateContext,
} from "../contexts/SocketContext";
import { Rooms } from "../interface/socket.io";

const useSocket = () => {
  const state = useContext(SocketStateContext);
  const dispatch = useContext(SocketDispatchContext);

  const { isConnected, socket, username, chatdata, rooms } = state;

  if (!dispatch) {
    throw "useSocket must be in SocketProvider.";
  }

  useEffect(() => {
    const onConnect = () => {
      console.log("Socket connected.");
      dispatch({ type: "CONNECT", payload: true });
    };
    const onRoomList = (newRooms: Rooms) => {
      dispatch({ type: "GET_ROOM_LIST", payload: newRooms });
    };

    socket.on("connect", onConnect);
    socket.on("ROOM_LIST", onRoomList);

    return () => {
      socket.off("connect", onConnect);
      socket.off("ROOM_LIST", onRoomList);
    };
  }, [socket]);

  return {
    socket,
    username,
    chatdata,
    rooms,
    isConnected,
  };
};

export default useSocket;
