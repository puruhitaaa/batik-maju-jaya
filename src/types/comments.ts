export type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};
