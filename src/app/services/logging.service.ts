export class LoggingService {
    logStatusChanged(name: string,status:string){
        console.log('A server status named, new name: ' + name);
        console.log('A server status changed, new status: ' + status);

    }
}