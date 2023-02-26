import { useContext, useEffect, useRef } from 'react';

import context from '../context/AppContext';
import '../styles/Editor.css';

export default function Editor() {
  const AppContext = useContext(context);
  const textAreaRef = useRef<any>();

  useEffect(() => {
    if (AppContext?.text.length !== 0) {
      textAreaRef.current.value = AppContext?.text;
    }
  }, [AppContext?.text]);

  const handleChange = ({ target }: any) => {    
    AppContext?.textApply(target.value);
    AppContext?.saveRef(textAreaRef);
  }

  return (
    <main className='editor'>
      <textarea
        onChange={handleChange}
        ref={textAreaRef}
        placeholder={'Que tal escrever o seu best-seller aqui? ;)'}
      />
    </main>
  )
}
