import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AuthStateAtom = atom({
  key: "authState",
  default: {
    isLogin: false,
    accessToken: null,
    role: "",
    id: "",
  },
  effects_UNSTABLE: [persistAtom],
});
