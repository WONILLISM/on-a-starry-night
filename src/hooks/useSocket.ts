import { useContext, useEffect } from "react";
import {
  SocketDispatchContext,
  SocketStateContext,
} from "../contexts/SocketContext";
import { Message, Rooms, SocketEvent } from "../interface/socket.io";

const useSocket = () => {
  const state = useContext(SocketStateContext);
  const dispatch = useContext(SocketDispatchContext);

  const { isConnected, socket, username, rooms, roomId, messages } = state;

  if (!dispatch) {
    throw "useSocket must be in SocketProvider.";
  }

  const createRoom = (title: string) => {
    socket.emit("CREATE_ROOM", { title: title });
  };

  const joinRoom = (roomId: string) => {
    socket.emit("JOIN_ROOM", roomId);
  };

  const sendMessage = (event: SocketEvent, message: Message) => {
    if (roomId) {
      socket.emit(event, { roomId, message });
    }
  };

  useEffect(() => {
    const onConnect = () => {
      console.log("Socket connected.");
      dispatch({ type: "CONNECT", payload: true });
    };
    const onRoomList = (newRooms: Rooms) => {
      dispatch({ type: "GET_ROOM_LIST", payload: newRooms });
    };
    const onJoinedRoom = (roomId: string) => {
      console.log(roomId);
      dispatch({ type: "JOIN_ROOM", payload: roomId });
    };
    const onRecievedCelbMessage = (message: Message) => {
      console.log(message.content);
      dispatch({ type: "SAVE_MESSAGE", payload: message });
    };

    socket.on("connect", onConnect);
    socket.on("ROOM_LIST", onRoomList);
    socket.on("JOINED_ROOM", onJoinedRoom);
    socket.on("RECIEVED_CELB_MESSAGE", onRecievedCelbMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("ROOM_LIST", onRoomList);
      socket.off("JOINED_ROOM", onJoinedRoom);
      socket.off("RECIEVED_CELB_MESSAGE", onRecievedCelbMessage);
    };
  }, [socket]);

  return {
    socket,
    username,
    rooms,
    roomId,
    messages,
    isConnected,
    createRoom,
    joinRoom,
    sendMessage,
  };
};

export default useSocket;
