import { useEffect, useRef, useState } from "react";
import { socket } from "../lib/socket";
import { ChatData } from "../interface/socket.io";

const Chat = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [socketEvents, setSocketEvents] = useState<ChatData[]>([]);

  const usernameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  // const handleSocketDisconnect = () => {
  //   setIsConnected(false);
  // };

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onMessage = (value: ChatData) => {
      console.log(value);
      setSocketEvents((prev) => [...prev, value]);
    };

    const onDisconnect = () => {
      console.log("disconnected");
      setIsConnected(false);
    };

    socket.on("connect", onConnect);

    socket.on("RECIEVED_CELB_MESSAGE", onMessage);
    socket.on("RECIEVED_FAN_MESSAGE", onMessage);

    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("RECIEVED_CELB_MESSAGE", onMessage);
      socket.off("RECIEVED_FAN_MESSAGE", onMessage);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  console.log(isConnected);
  console.log(socketEvents);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        minHeight: "80vh",
        maxWidth: "900px",

        border: "1px solid black",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {socketEvents &&
          socketEvents.map((event, eventIdx) =>
            usernameRef.current &&
            event.username === usernameRef.current.value ? (
              <div
                key={`${event.username}_${eventIdx}`}
                style={{ flex: "start" }}
              >
                {event.username}: {event.message}
              </div>
            ) : (
              <div key={`${event.username}_${eventIdx}`}>
                {event.username}: {event.message}
              </div>
            )
          )}
      </div>

      <div
        style={{ width: "100%", marginTop: "auto", border: "1px solid blue" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (usernameRef.current && messageRef.current) {
              console.log("send");
              socket.emit("SEND_CELB_MESSAGE", {
                event: "message",
                username: usernameRef.current.value,
                message: messageRef.current.value,
              });
            }
          }}
        >
          <div>
            <label>username: </label>
            <input ref={usernameRef} />
          </div>
          <div>
            <label>message: </label>
            <input ref={messageRef} />
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
