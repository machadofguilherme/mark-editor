import { useContext } from "react";
import MDEditor from '@uiw/react-md-editor';

import context from '../context/AppContext';
import '../styles/Output.css';

export default function Output() {
  const AppContext = useContext(context);
  const textContent: string = AppContext?.text as string;

  return (
    <main className="output">
      <MDEditor.Markdown
        disableCopy={true}
        source={textContent}
        style={{
          backgroundColor: 'black',
          color: 'gray',
          paddingRight: '50px'
        }}
      />
    </main>
  )
}
