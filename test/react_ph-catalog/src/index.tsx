import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
    {/* <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="phones" element={<PhonesPage />} />
      </Route>
    </Routes> */}
  </HashRouter>,
  document.getElementById('root'),
);

