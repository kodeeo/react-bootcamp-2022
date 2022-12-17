import {Link, Outlet} from 'react-router-dom'

export default function Layout() {
    return (
        <div>
        <nav>
        <ul className='flex w-full gap-8'>
          <li className='bg-blue-200 py-2 px-6 cursor-pointer'>
            
            <Link to='app-two'>
              App Two
            </Link>
            
          </li>  

          <li className='bg-blue-200 py-2 px-6 cursor-pointer'>
            <Link to='hooks-intro'>

            Hooks Intro
            </Link>
          </li>  

          <li className='bg-blue-200 py-2 px-6 cursor-pointer'>
            <Link to='use-demo'>
              UseEffect Demo
            </Link>  
          </li>  

          <li className='bg-blue-200 py-2 px-6 cursor-pointer'>
            
          <Link to='http-demo'>
            HTTP Request Demo
            
            </Link>
          </li>  


        </ul>  
      </nav>  
      

      <div className='wrapper'>
        <Outlet />
      </div>
      </div>
    )
}