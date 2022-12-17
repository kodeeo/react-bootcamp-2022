import { useEffect, useState } from 'react';
import AppTwo from './AppTwo';
import HooksIntro from './HooksIntro';
import UseEffectDemo from './components/Header/UseEffectDemo';
import HttpRequestDemo from './components/HttpRequestDemo';


function CompView({ view }) {
  if(view === 'use-demo') {
    return (
      <UseEffectDemo />
    )
  }
  else if(view === 'hooks-intro') {
    return (
      <HooksIntro />
    )
  }
  else if(view === 'http-demo') {
    return (
      <HttpRequestDemo/>
    )
  }
  return (
    <AppTwo />
  )
  // return (
  //   <div>
  //     Comp View Component {view}
  //   </div>
  // )
}


function getUrlParam() {
  //http://localhost:3000/?component=hooks-intro
  let params = (new URL(document.location)).searchParams;
  let compName = params.get("component");
  return compName
}

export default function App() {
  const [view, setView] = useState('app-two')

  const changeView = (viewName) => {
    setView(viewName)
  }

  useEffect(() => {
    const param = getUrlParam()
    setView(param)
    // console.log(getUrlParam())
  }, [])

  return(
    <div>
      <nav>
        <ul className='flex w-full gap-8'>
          <li className='bg-blue-200 py-2 px-6 cursor-pointer' onClick={() => changeView('app-two')}>App Two</li>  

          <li className='bg-blue-200 py-2 px-6 cursor-pointer' onClick={() => changeView('hooks-intro')}>Hooks Intro</li>  

          <li className='bg-blue-200 py-2 px-6 cursor-pointer' onClick={() => changeView('use-demo')}>UseEffect Demo</li>  

          <li className='bg-blue-200 py-2 px-6 cursor-pointer' onClick={() => changeView('http-demo')}>HTTP Request Demo</li>  

        </ul>  
      </nav>  
      

      <div className='wrapper'>
        <CompView view={view} count={0} />
      </div>
    </div>
  )
}