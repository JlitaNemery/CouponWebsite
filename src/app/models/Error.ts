
export class Err{
    public error :string;

    public constructor(error?:string){
        this.error = error;
    }
    public getError(): string{
        return this.error;
    }
    public toString() : string {
        return `
        error: ${this.error}
        `; 
    }
}