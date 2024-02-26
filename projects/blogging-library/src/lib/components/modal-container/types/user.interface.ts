export interface IUser {
    id: number;
    username: string;
    memberSince: string;
    avatar: string;
    friendsIds: number[];
    posts: {
        id: number,
        title: string,
        subtitle: string,
        content: string;
    }[]
}
