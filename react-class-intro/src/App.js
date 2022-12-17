import { Routes, Route } from 'react-router-dom';
import AppTwo from './AppTwo';
import HooksIntro from './HooksIntro';
import UseEffectDemo from './components/Header/UseEffectDemo';
import HttpRequestDemo from './components/HttpRequestDemo';
import Layout from './components/Layout';

export default function App() {


  return(
    <div>

      <h1>React Router Dom Demo</h1>
      
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<AppTwo />} />

          <Route path='app-two' element={<AppTwo />} />

          <Route path='use-demo' element={<UseEffectDemo />} />

          <Route path='hooks-intro' element={<HooksIntro />} />

          <Route path='http-demo' element={<HttpRequestDemo />} />


        </Route>

      </Routes>

    </div>
  )
}