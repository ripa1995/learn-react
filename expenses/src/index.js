import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

//main entry point of the ui
//tells react where the react app should be placed in the webpage (public/index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
