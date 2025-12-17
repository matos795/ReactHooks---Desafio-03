import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import HomeIndex from './routes/Home/HomeIndex'
import UsersIndex from './routes/Home/UsersIndex'
import User from './routes/Home/UsersIndex/User'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='/home' element={<HomeIndex />} />

            <Route path='/users' element={<UsersIndex />}>
              <Route path=':userName' element={<User />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>

            <Route path="*" element={<Navigate to='/home' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
