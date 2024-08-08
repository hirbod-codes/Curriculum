import { createRoot } from 'react-dom/client';

import { App } from './App';

import './i18next'

const root = createRoot(document.getElementById('react') as HTMLElement);

root.render(<App />);
