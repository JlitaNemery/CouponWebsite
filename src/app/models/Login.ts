
export class Login{

    public email:string;
    public password:string;
    public clientType:string;
    public session:string;
    public constructor(email?:string, password?:string, clientType?:string, session?:string){
        this.email = email;
        this.password = password;
        this.clientType = clientType;
        this.session = session;
    }

    public toString() : string {
        return `
        clientType: ${this.clientType}
        email: ${this.email}
        password: ${this.password}
        session: ${this.password}`; 
    }

    
}