module.exports = class ReponseObject {
    constructor() {

    }

    static success(data) {
        return JSON.stringify({
            status: 200,
            ...data
        });
    }

    static failure(data) {
        return JSON.stringify({
            status: -1,
            ...data
        });
    }
}