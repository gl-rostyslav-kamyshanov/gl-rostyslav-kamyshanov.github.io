self.oninstall = _ => self.skipWaiting();
self.onactivate = _ => {
  self.registration.unregister()
    .then(_ => client.getAll())
    .then(clients => clients.map(c => c.navigate()));
};
