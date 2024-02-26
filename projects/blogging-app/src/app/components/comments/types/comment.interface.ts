export interface IComment {
  id: number;
  respondsTo: null | { id: number };
  author: {
    id: number;
    username: string;
  };
  timestamp: string;
  content: string;
}
