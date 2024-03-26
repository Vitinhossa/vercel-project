import { fontSizes, fontFamily, fontWeight } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import { colors } from '@/utils/colors';
import { Paragraph } from '../../atoms/Text';
import { List, ListItem, ItemHead, ItemAnswer } from './style';

interface IQuestion {
  id: number;
  title: string;
  answer: string;
  isOpen?: boolean;
}
interface IQuestionList {
  questions?: Array<IQuestion>;
  margin?: string;
}
export default function QuestionList({
  questions = [],
  margin,
}: IQuestionList) {
  const [allQuestions, setAllQuestions] = useState<IQuestion[]>(questions);

  const handleOpenQuestion = (toOpen: IQuestion) => {
    const newQuestions: any = [];

    allQuestions.forEach((question) => {
      const newQ = question;
      if (question.id === toOpen.id) {
        newQ.isOpen = !question.isOpen;
      } else {
        newQ.isOpen = false;
      }
      newQuestions.push(question);
    });

    setAllQuestions(newQuestions);
  };

  useEffect(() => {
    setAllQuestions(questions);
  }, [questions]);
  return (
    <List margin={margin}>
      {allQuestions.map((question) => (
        <ListItem key={question.id}>
          <ItemHead onClick={() => handleOpenQuestion(question)}>
            <Paragraph
              fontSize={fontSizes.medium17}
              fontWeight={fontWeight.semibold}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
            >
              {question.title}
            </Paragraph>
            <i
              className="icon-chevron-right"
              style={{
                transform: `rotate(${question.isOpen ? `270deg` : `90deg`})`,
                transition: `all .3s`,
                color: colors.cinzaDark,
                fontSize: fontSizes.medium17,
                marginRight: `5px`,
              }}
            />
          </ItemHead>
          <ItemAnswer isOpen={question.isOpen}>
            <Paragraph
              fontFamily={fontFamily.roboto}
              fontSize={fontSizes.small15}
              fontColor={colors.cinzaMedium}
            >
              {question.answer}
            </Paragraph>
          </ItemAnswer>
        </ListItem>
      ))}
    </List>
  );
}
