import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import CardsList from './components/CardsList'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CardsList />
      </div>
    </QueryClientProvider>
  )
}

export default App
