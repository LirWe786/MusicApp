export function register(){
    
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker зарегистрирован:', registration);
      })
      .catch((error) => {
        console.error('Ошибка при регистрации Service Worker:', error);
        
      });
    });
  }
}