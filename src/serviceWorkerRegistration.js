// Este arquivo é responsável por registrar o service worker

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] é o endereço IPv6 localhost.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 são considerados localhost para IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // O URL do service worker
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // O service worker não funcionará se PUBLIC_URL estiver em um servidor diferente.
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Isso está rodando em localhost. Vamos verificar se o service worker ainda existe ou não.
        checkValidServiceWorker(swUrl, config);

        // Adicione alguns logs adicionais para localhost, apontando para o service worker/pwa.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'Este aplicativo está sendo servido em cache-first por um service worker. Para saber mais, visite https://cra.link/PWA'
          );
        });
      } else {
        // Não é localhost. Basta registrar o service worker.
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // No momento, o conteúdo antigo foi atualizado.
              console.log(
                'Novo conteúdo está disponível e será usado quando todas as abas do aplicativo forem fechadas.'
              );

              // Executa o callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // No momento, tudo foi pré-cacheado.
              console.log('O conteúdo está em cache para uso offline.');

              // Executa o callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Erro durante o registro do service worker:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Verifica se o service worker pode ser encontrado. Se não puder recarregar a página.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // Certifique-se de que o service worker existe e que realmente estamos recebendo um arquivo JavaScript.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // Nenhum service worker encontrado. Provavelmente um aplicativo diferente. Recarrega a página.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker encontrado. Prossegue normalmente.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'Nenhuma conexão à internet encontrada. O aplicativo está sendo executado no modo offline.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}