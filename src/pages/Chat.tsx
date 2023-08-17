import { useState } from "react";
import useSocket from "../hooks/useSocket";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { socket, isConnected, rooms } = useSocket();
  const [cnt, setCnt] = useState<number>(0);
  const navigate = useNavigate();

  const handleJoinRoom = (key: string) => {
    socket.emit("JOIN_ROOM", rooms[key]);
    navigate(`${key}`);
  };

  if (!isConnected) return <div>Loading ...</div>;

  return (
    <>
      <div>
        {Object.keys(rooms).map((key) => (
          <button
            key={key}
            onClick={() => {
              handleJoinRoom(key);
            }}
          >
            {rooms[key].title}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          socket.emit("CREATE_ROOM", { title: `room ${cnt}` });
          setCnt(cnt + 1);
        }}
      >
        create room
      </button>
    </>
  );
};

export default Chat;
