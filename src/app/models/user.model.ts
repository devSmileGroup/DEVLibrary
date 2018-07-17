export class User {
    constructor(
        public name: string,
        public id: number,
        public email: string,
        private password: string,
        public books: [{}],
        public status: string,
        public token: string
    ) { }
}