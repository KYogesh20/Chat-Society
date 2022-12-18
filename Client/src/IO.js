import { io } from "socket.io-client";
export const socket = io(VITE_APP_BACKEND_URL);
