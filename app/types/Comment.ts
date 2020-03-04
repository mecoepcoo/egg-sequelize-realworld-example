import { Author } from './Author'

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
}

export interface Comments {
  comments: Comment[];
}
