import { useState } from 'react';
import context from './AppContext';

export default function AppProvider({ children }: any) {
  const [mod, setMod] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [ref, setRef] = useState({});

  const changeMod = (bool: boolean) => setMod(bool);
  const textApply = (text: string) => setText(text);
  const saveRef = (ref: any) => setRef(ref);
    
  const data = {
    mod,
    changeMod,
    text,
    textApply,
    ref,
    saveRef,
  }

  return (
    <context.Provider value={data}>
      {children}
    </context.Provider>
  )
}
