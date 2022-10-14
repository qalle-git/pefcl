import App from './src/views/Mobile/Mobile';
import BankIcon from './src/BankIcon';

// const defaultLanguage = 'en';
// const localizedAppName = {
//   en: 'APPS_BANK',
// };

// interface Settings {
//   language: 'en';
// }

export const externalAppConfig = () => ({
  id: 'BANK',
  nameLocale: 'eBank',
  color: '#fff',
  backgroundColor: '#264f82',
  path: '/bank',
  icon: BankIcon,
  notificationIcon: BankIcon,
  app: App,
});

export default externalAppConfig;

if (module.hot) {
  module.hot.accept('./src/views/Mobile/Mobile', function () {
    console.log('Accepting the updated app from PEFCL ..');
    window.postMessage({ type: 'RELOAD', payload: 'app:pefcl' }, '*');
  });
}
