import { io } from "socket.io-client";
export const socket = io(process.env.VITE_APP_BACKEND_URL);
