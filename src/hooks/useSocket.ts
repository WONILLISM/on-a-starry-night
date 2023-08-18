import { useContext, useEffect, useState } from "react";
import {
  SocketDispatchContext,
  SocketStateContext,
} from "../contexts/SocketContext";
import { Message, Messages, Rooms, SocketEvent } from "../interface/socket.io";

const useSocket = () => {
  const state = useContext(SocketStateContext);
  const dispatch = useContext(SocketDispatchContext);

  const [messages, setMessages] = useState<Messages>([]);

  const { isConnected, socket, username, chatdata, rooms } = state;

  if (!dispatch) {
    throw "useSocket must be in SocketProvider.";
  }

  const sendMessage = (event: SocketEvent, message: Message) => {
    socket.emit(event, message);
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
    };
    const onRecievedCelbMessage = (message: Message) => {
      console.log(message.content);

      setMessages((prev) => [...prev, message]);
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
    chatdata,
    rooms,
    messages,
    isConnected,
    sendMessage,
  };
};

export default useSocket;
