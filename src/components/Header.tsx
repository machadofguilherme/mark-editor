import { useContext, useEffect, useRef } from 'react';
import { getFileAsString } from 'easy-file-picker';
import { saveAs } from 'file-saver';

import {
  VscNewFile,
  VscSaveAs,
  VscFile,
  VscGithubAlt,
  VscCircleFilled,
  VscCircleOutline
} from 'react-icons/vsc';

import context from '../context/AppContext';
import '../styles/Header.css';

export default function Header() {
  const AppContext = useContext(context);
  const openRef = useRef<any>(null);

  useEffect(() => {
    if (AppContext?.text !== '') {
      AppContext?.changeMod(true);
    } else {
      AppContext?.changeMod(false);
    }
    
  }, [AppContext?.text]);
  
  const handleSave = () => {
    if (AppContext?.text === '') return false;

    const text: string = AppContext?.text as string;
    const file = new File([text], "mark-editor.md", {type: "text/plain;charset=utf-8"});
    
    saveAs(file);
    
    AppContext?.changeMod(false);
  }

  const handleNew = () => {
    AppContext?.changeMod(false);
    
    let { current } = AppContext?.ref;
    current.value = '';
    
    AppContext?.textApply('');
  }

  const handleOpen = async () => {
    const file = await getFileAsString();
    const content = file.content;
    AppContext?.textApply(content);
  }

  return (
    <header className='header'>
      <section>
        <h1>ME</h1>
      </section>

      <section className='header-menu'>
        <div className='header-menu_container'>
          <i><VscNewFile onClick={ handleNew }/></i>
          <i><VscFile onClick={ handleOpen } /></i>
          <i><VscSaveAs onClick={handleSave} /></i>
          <span></span>
          <a
            href="https://github.com/machadofguilherme/"
            target={'_blank'}
          >
            <i>
              <VscGithubAlt />
            </i>
          </a>
          
          {
            AppContext?.mod
              ? <i><VscCircleOutline className='header-dot' /></i>
              : <i><VscCircleFilled className='header-dot' /></i>
            }
            
        </div>
      </section>

      <input
        type={'file'}
        ref={openRef}
        accept=".md"
        style={{ display: 'none' }}
      />
    </header>
  )
}
