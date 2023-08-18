import { useState } from "react";
import useSocket from "../hooks/useSocket";
import { Message } from "../interface/socket.io";

const MessageForm = ({
  handleSubmit,
}: {
  handleSubmit: (message: Message) => void;
}) => {
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [editUsernameToggle, setEditUsernameToggle] = useState<boolean>(true);

  return (
    <div>
      {editUsernameToggle ? (
        <div>
          <label>username: </label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setEditUsernameToggle(false);
            }}
          >
            ok
          </button>
        </div>
      ) : (
        <div>
          <div>{username}</div>
          <button
            onClick={() => {
              setEditUsernameToggle(true);
            }}
          >
            edit username
          </button>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ username: username, content: message });
        }}
      >
        <textarea
          onChange={(e) => {
            const { value } = e.target;
            setMessage(value);
          }}
        />
        <button type="submit" disabled={!!!username || editUsernameToggle}>
          send
        </button>
      </form>
    </div>
  );
};

const ChatRoom = () => {
  const { isConnected, sendMessage, messages } = useSocket();

  if (!isConnected) return <div>Loading...</div>;

  const handleSubmit = (message: Message) => {
    sendMessage("SEND_CELB_MESSAGE", message);
  };

  return (
    <div>
      <div>ChatRoom</div>
      <div>
        {messages.map((msg, idx) => (
          <div
            key={`${msg.username}_${idx}`}
          >{`${msg.username}: ${msg.content}`}</div>
        ))}
      </div>
      <MessageForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatRoom;
