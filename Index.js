const webSocket = requiere('ws');
const wss = new webSocket.Server({PORT:808})
wss.on('connection', (ws)=>{
    console.log("un nuevo usuario conectado");
    ws.on('message', (data)=>{
        console.log('mensaje:${data}');
        wss.clientes.forEach((cliente)=>{
            if(cliente != ws && 
                cliente.readyState == webSocket.OPEN){
                    cliente.send(data);
                }
        });
    });
    ws.on('close',()=>{
        console.log('usuario desconectado');
    });
});
console.log('server funcionando!');
