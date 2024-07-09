
import './App.css'
import Layout from './layout/Layout'
import { Toaster, toast } from 'sonner'


function App() {

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Toaster
        expand={true}
        richColors
        position="bottom-right"
      />
      <Layout />
    </main>
  )
}

export default App
