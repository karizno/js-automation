// 3. Напишите анотации типов к этому классу.

export class ObjectManipulator {   
    
    constructor(protected obj: any) {}

    public set(key: string, value: string | number): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): string | number {
        return this.obj[key];
    }

    public delete(key: string): object {
        const newObj: any  = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object{
        return this.obj;
    }
}