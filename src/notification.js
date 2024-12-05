import { useEffect } from 'react';
import axios from 'axios';

const publicVapidKey = 'BDvTBwfpvkXNYg_2dquVsajy9DYtLDl0jYbh5KB4DlZgwuf1qhAfGcvALCmyWCnvY3oeZY2gh4pXmEAyhQjC4kc';
const privateVapidKey = 'aMrE8MVotHfrmyY10apNoplhxYZa1CQBqHxpnwyt5r0';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrY190b2tlbiI6IiIsImlhdCI6MTczMzQyNjMwOSwiZXhwIjoxNzMzNTEyNzA5LCJhdWQiOlsiQWRtaW4iXSwic3ViIjoiYWI2YzI1YzEtOTQzZC00OWM1LWFkYjItZjEyNGQ5YzQxZDYzIiwianRpIjoiMTM1NDdlOTktODdjYi00MDU5LTljMWItN2FkZDRlZGExMTlhLXNlYnJhZSJ9.DL5PpqCeuzbpkZAbUpAFrMCGI7e3Cu72ShFF37W_m68'


export default function PushNotification() {
  useEffect(() => {
    const verifySupportAndPermission = async () => {
      console.log('vai verificar suporte e permissão');

      // Verificar se o navegador suporta notificações
      if (
        !('Notification' in window) ||
        !('PushManager' in window) ||
        !('serviceWorker' in navigator)
      ) {
        console.error('Este navegador não suporta notificações de push.');
        return;
      }
      const registration = await navigator.serviceWorker.register('/sw.js');

      const permissionState = await registration.pushManager.permissionState({
        userVisibleOnly: true,
      });

      console.log('Status da permissão:', permissionState);

      // Solicita permissão caso o usuário ainda não tenha sido perguntado
      if (permissionState === 'prompt') {
        const notificationPermission = await Notification.requestPermission();
        if (notificationPermission === 'granted') {
          console.log('Notificações concedidas.');
          registerForPushNotifications(registration);
          return;
        }

        if (notificationPermission === 'denied') {
          console.log('Notificações foram negadas pelo usuário.');
          return;
        }
      } else if (permissionState === 'denied') {
        console.log(
          'Notificações foram negadas pelo usuário. essa é por fora.',
        );
        return;
      }

      // Se a permissão foi concedida, faz a inscrição
      if (permissionState === 'granted') {
        console.log('Notificações concedidas. essa é por fora');
        registerForPushNotifications(registration);

        //TODO: aqui o usuario ja aceitou, e ja temos um cadastro, agora precisamos fazer
        //TODO: uma logica que verifque se o endpoint mudou ou se precisa mandar o id do usuario para o backend
        //TODO exemplo da logica de verificacao
        //? const {isSubscribed} = await handleVerifySubscription(registration);
        //? if (isSubscribed) {
        //?   console.log('Inscrição de notificações permanece a mesma.');
        //?   return;
        //? } else {
        //?   console.log('Inscrição de notificações foi alterada. enviar novamente.');
        //?   registerForPushNotifications(registration);
        //?   return;
        //? }
        //? registerForPushNotifications(registration);
      }
    };

    verifySupportAndPermission();
  }, []);

  const registerForPushNotifications = async (
    registration,
  ) => {
    try {
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          publicVapidKey,
        ),
      });

      const subscriptionJson = JSON.stringify(subscription);
      const parsedSubscription = JSON.parse(subscriptionJson);

      console.log(parsedSubscription);

      const { endpoint, keys } = parsedSubscription;
      const { p256dh, auth } = keys;
      await axios.post('http://localhost:3008/subscription', {
        auth: auth,
        endpoint: parsedSubscription.endpoint, 
        p256dh: p256dh
      },
        {headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }}
      )
      ;
      
    } catch (error) {
      console.error('Erro ao inscrever-se:', error);
    }
  };

  // Função para converter chave base64 para Uint8Array
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    const rawData = window.atob(base64);
    return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
  }

  return null;
}