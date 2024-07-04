import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SidebarProvider } from './context/SidebarContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <SidebarProvider>
        <App />
    </SidebarProvider>
);