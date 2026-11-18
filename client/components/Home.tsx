import { Outlet } from 'react-router'

export default function Home() {
  return (
    <>
      <header>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
