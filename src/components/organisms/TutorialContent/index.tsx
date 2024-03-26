import { tutoriais } from '@/utils/tutoriais';
import {
  Container, Image, Item, ListContainer, ListContent, Text
} from './style';
import { useRouter } from 'next/router';

export default function TutorialContent() {
  const router = useRouter();
  return (
    <Container>
      <Image src='./tutorial/tutorial.svg' style={{ marginBottom: '40px' }} />
      <ListContainer>
        <ListContent>
          {
            tutoriais.map((item) => (
              <Item onClick={() => router.push(`/tutorial/${item.route}`)}>
                <Image src={item.image} />
                <Text>{item.text}</Text>
              </Item>
            ))
          }
        </ListContent>
      </ListContainer>
    </Container>
  );
}
