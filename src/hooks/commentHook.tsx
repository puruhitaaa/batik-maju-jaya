import _ from 'lodash';
import { useState } from 'react';
import { comments as data } from '../data/commentState';

export const useComment = () => {
  const [commentLength] = useState(_.size(data));
  const [repliesLength] = useState(_.size(_.map(data, 'replies')));
  const [commentReplies] = useState(
    _.size(
      _.flatten(
        data
          .map((element) => element.replies)
          .map((el) => el?.map((rep) => rep.replies))[0]
      )
    )
  );

  const totalComments = commentLength + repliesLength + commentReplies;

  return {
    totalComments,
  };
};
