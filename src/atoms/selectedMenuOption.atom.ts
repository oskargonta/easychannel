import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export type TMenuOption = "Home" | "Register";

const SelectedMenuOptionAtom = atom<TMenuOption>({
  key: "selectedMenuOption",
  default: "Home",
  effects_UNSTABLE: [persistAtom],
});

export default SelectedMenuOptionAtom;