class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = []) {
        super(message);
        
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;

        // Assign error details to this.error
        this.error = {
            message: this.message,
            errors
        };
    }
}

export { ApiError };