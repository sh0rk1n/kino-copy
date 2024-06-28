import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './app/styles/index.scss';

const container = document.getElementById('root');

const x = 1;

if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
    );
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
