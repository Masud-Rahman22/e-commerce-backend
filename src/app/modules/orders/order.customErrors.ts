// src/errors/CustomErrors.ts

class InsufficientQuantityError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InsufficientQuantityError";
    }
}

class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError";
    }
}

export { InsufficientQuantityError, NotFoundError };
