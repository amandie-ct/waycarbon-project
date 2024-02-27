export interface IPost {
    id: number;
    timestamp: string;
    author: {
        id: number,
        username: string,
        avatar: string
    },
    title: string;
    subtitle: string;
    content: string
}