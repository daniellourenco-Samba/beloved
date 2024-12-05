/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
self.addEventListener('push', event => {
    const data = event.data.json();
  
    const options = {
      body: data.message,
      icon: '/favicon.ico', // Ícone da notificação
      image: data.image, // Imagem da notificação (caso o navegador suporte)
      data: { url: data.url }, // URL que será aberta ao clicar na notificação
    };
  
    event.waitUntil(self.registration.showNotification(data.title, options));
  });
  
  self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const urlToOpen = notification.data.url || '/'; // Define URL específica ou redireciona para a home se não houver
  
    event.notification.close();
  
    // Enviar dados de rastreamento para o servidor
    // const trackClick = fetch(
    //   'http://localhost:3000/api/notification-click/create',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       notificationId: 1,
    //       userId: null, // Supondo que o userId seja enviado nos dados da notificação
    //       deviceInfo: {
    //         userAgent: navigator.userAgent,
    //         platform: navigator.platform,
    //       },
    //       timestamp: new Date().toISOString(),
    //     }),
    //   },
    // ).catch(error => console.error('Erro ao rastrear o clique:', error));
  
    event.waitUntil(
      Promise.all([
        clients
          .matchAll({ type: 'window', includeUncontrolled: true })
          .then(clientList => {
            for (const client of clientList) {
              if (client.url === urlToOpen && 'focus' in client) {
                return client.focus();
              }
            }
            if (clients.openWindow) {
              return clients.openWindow(urlToOpen);
            }
          }),
      ]),
    );
  });