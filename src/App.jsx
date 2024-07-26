import './App.css'
import Layout from './layout/Layout'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="app-container relative">
      <div className="area fixed inset-0">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <main className="text-gray-400 body-font relative z-10">
        <Toaster expand={true} richColors position="bottom-right" />
        <Layout />
      </main>
    </div>
  )
}

export default App
