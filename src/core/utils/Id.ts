export default class Id {

    static get novo(): number {
        let novoId = Math.random() * 100;
        return Math.round(novoId);
    }
}