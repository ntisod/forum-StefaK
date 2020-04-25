module.exports = class ReponseObject {
    constructor() {

    }

    static success(data) {
        return JSON.stringify({
            successCode: 0,
            ...data
        });
    }

    static failure() {
        return JSON.stringify({
            successCode: -1
        });
    }
}