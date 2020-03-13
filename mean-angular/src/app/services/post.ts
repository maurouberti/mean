export class Post {
    constructor(
        public _id: String,
        public title: String,
        public body: String,
        public slug: String,
        public created_at: Date
    ) { }
}
