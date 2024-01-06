import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const changeComponent = atom({
  key: "changeComponent",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
