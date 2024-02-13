import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AuthStateAtom = atom({
  key: "AuthStateAtom",
  default: {
    isLogin: false,
    accessToken: null,
    refreshToken: null,
    role: "",
    id: "",
    name: "",
  },
  effects_UNSTABLE: [persistAtom],
});
