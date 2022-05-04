import React from 'react';
import {
  ActionIcon,
  Avatar,
  Button,
  Container,
  Group,
  Input,
  Text,
  Title,
  Indicator,
  Checkbox,
  TextInput,
  InputWrapper,
  Stack,
} from '@mantine/core';

function App() {
  return (
    <>
      <nav className="w-full shadow-md">
        <Container className="flex justify-between" size={1084}>
          <Group>
            <Title order={1}>인프런</Title>
            {['강의', '로드맵', '멘토링', '커뮤니티', '채용정보'].map((el) => (
              <Text weight="bold" className="px-[14px] py-[20px]">
                {el}
              </Text>
            ))}
          </Group>
          <Group>
            <Input
              styles={{ rightSection: { pointerEvents: 'none' } }}
              rightSection={'🔍'}
            />
            <Button color="teal">최근 강의</Button>
            <ActionIcon>🛒</ActionIcon>
            <Indicator color="red" size={5}>
              <ActionIcon>🔔</ActionIcon>
            </Indicator>
            <Avatar radius="xl" />
          </Group>
        </Container>
      </nav>
      <main className="flex mt-5">
        <Container className="flex w-full" size={1084}>
          <section className="flex-1">
            <Title order={2} className="mb-3">
              장바구니
            </Title>
            <Container fluid className="flex justify-between">
              <div className="flex items-center">
                <Checkbox label="전체선택" />
                <Text className="ml-1">2/5</Text>
              </div>
              <Button variant="outline" color="gray" rightIcon="X">
                선택삭제
              </Button>
            </Container>
          </section>
          <aside className="w-[300px]">
            <div className="p-[20px] border border-solid rounded-lg border-gray-100">
              <Stack>
                <TextInput
                  placeholder="실명 입력"
                  label="구매자 이름"
                  required
                />
                <TextInput placeholder="이메일 입력" label="이메일" required />
                <InputWrapper id="input-demo" required label="휴대폰 번호">
                  <div className="flex">
                    <Input
                      id="input-demo"
                      placeholder="01012341234"
                      className="flex-1"
                    />
                    <Button variant="outline" color="gray" className="ml-2">
                      인증 요청
                    </Button>
                  </div>
                </InputWrapper>
              </Stack>
            </div>
          </aside>
        </Container>
      </main>
    </>
  );
}

export default App;
