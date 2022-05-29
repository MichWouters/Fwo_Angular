export class Holiday {
    public temperature: number;
    public city: string;

    constructor(city: string, temperature: number) {
        this.city = city;
        this.temperature = temperature;
    }
}