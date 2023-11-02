import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import OverlayProvider from './hooks/useOverlay/OverlayProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <OverlayProvider>
    <App />
  </OverlayProvider>
);
