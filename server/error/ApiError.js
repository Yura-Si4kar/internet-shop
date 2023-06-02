class ApiError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
    // проблеми клієнта
    static badRequest(message) {
        return new ApiError(404, message)
    }
    // проблеми сервера
    static internal(message) {
        return new ApiError(500, message)
    }
    // відсутній доступ
    static forbiden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError;