export type IData = {
  mod: boolean;
  changeMod: (bool: boolean) => void;
  text: string;
  textApply: (text: string) => void;
  ref: any;
  saveRef: (ref: any) => void;
}