/**
 * client events
 * CREATE_ROOM - 셀럽회원에 의한 채팅방 생성
 * JOIN_ROOM - 셀럽회원 및 일반회원 채팅방 입장
 * SEND_CELB_MESSAGE - 셀럽회원 메세지 전송
 * SEND_FAN_MESSAGE - 일반회원 메세지 전송
 *
 * server events
 * JOINED_ROOM - 셀럽회원 및 일반회원 채팅방 입장
 * RECIEVED_CELB_MESSAGE - 셀럽회원 메세지 수신
 * RECIEVED_FAN_MESSAGE - 일반회원 메세지 수신
 */

export interface ServerToClientEvents {
  ROOM_LIST: (rooms: Rooms) => void;
  JOINED_ROOM: (roomId: string) => void;
  RECIEVED_CELB_MESSAGE: (message: Message) => void;
  RECIEVED_FAN_MESSAGE: (message: Message) => void;
}

export interface ClientToServerEvents {
  CREATE_ROOM: ({ title }: { title: string }) => void;
  JOIN_ROOM: (room: Room) => void;
  SEND_CELB_MESSAGE: (message: Message) => void;
  SEND_FAN_MESSAGE: (message: Message) => void;
}

export type SocketData = Rooms | Room | Messages | Message;

export interface Room {
  title: string;
}

export interface Message {
  username: string;
  content: string;
}

export type Rooms = Record<string, Room>;
export type Messages = Message[];

export type SocketEvent = keyof ClientToServerEvents;
