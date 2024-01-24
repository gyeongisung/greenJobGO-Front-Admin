import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AuthStateAtom = atom({
  // key: "authState",
  key: "AuthStateAtom",
  default: {
    isLogin: false,
    accessToken: null,
    role: "",
    id: "",
    name: "",
  },
  effects_UNSTABLE: [persistAtom],
});
