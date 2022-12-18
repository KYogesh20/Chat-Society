import { io } from "socket.io-client";
import { env } from "node:process";
export const socket = io(env.VITE_APP_BACKEND_URL);
