import { useState } from "react";
import useSocket from "../hooks/useSocket";
import { useNavigate } from "react-router-dom";

const CreateRoom = ({
  handleCreateRoom,
}: {
  handleCreateRoom: (title: string) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  if (!toggle) {
    return (
      <div>
        <button
          onClick={() => {
            setToggle(true);
          }}
        >
          Create Room
        </button>
      </div>
    );
  }

  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          const { value } = e.target;
          setTitle(value);
        }}
      />
      <button
        onClick={() => {
          handleCreateRoom(title);
          setToggle(false);
        }}
      >
        Create
      </button>
      <button
        onClick={() => {
          setToggle(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

const Chat = () => {
  const { socket, isConnected, rooms } = useSocket();
  const navigate = useNavigate();

  const handleJoinRoom = (key: string) => {
    socket.emit("JOIN_ROOM", rooms[key]);
    navigate(`${key}`);
  };

  const handleCreateRoom = (title: string) => {
    socket.emit("CREATE_ROOM", { title: title });
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
      <CreateRoom handleCreateRoom={handleCreateRoom} />
    </>
  );
};

export default Chat;
