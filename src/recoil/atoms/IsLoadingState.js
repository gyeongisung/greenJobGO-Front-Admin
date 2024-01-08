import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const IsLoading = atom({
  key: "isLoading",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
