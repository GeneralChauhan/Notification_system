self.addEventListener('push', function(e){
    var  options ={
        body:'this is test meaasage',
        vibrate:[100,50,100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title:'explore this world'},
            {action: 'close', title: 'close'},
        ]
    };
    e.waitUntil(
    self.ServiceWorkerRegistration.showNotification('hello world',options)
    );
});