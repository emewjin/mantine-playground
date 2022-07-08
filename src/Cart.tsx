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
  Tooltip,
  Divider,
  Image,
} from '@mantine/core';

function Lecture({ isFirst = false }) {
  return (
    <>
      {isFirst && <Divider className="mb-[16px]" />}
      <div className="flex items-center mt-[16px]">
        <Checkbox />
        <Image
          className="mx-[16px]"
          height={78}
          width={120}
          radius="md"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Random unsplash image"
        />
        <div className="flex flex-col self-start">
          <Text>강의 이름 강의 이름 강의 이름 강의 이름 강의 이름</Text>
          <div className="flex mt-1">
            <Text size="sm" color="gray">
              지식공유자
            </Text>
            <Divider orientation="vertical" className="mx-2 h-4 self-center" />
            <Text size="sm" weight="500" color="brand">
              수강기한
            </Text>
          </div>
        </div>
        <ActionIcon className="ml-10 self-start">X</ActionIcon>
        <Divider orientation="vertical" my="sm" className="mx-6 my-0 h-auto" />
        <Text weight="bold" className="ml-auto self-start">
          99,999,000원
        </Text>
      </div>
      <Divider className="mt-[16px]" />
    </>
  );
}

// 헤딩 태그의 폰트 사이즈도 커스터마이징 가능하지만 일단은 하지 않고 테일윈드로 필요한 부분만 쓴다
function Cart() {
  return (
    <>
      <nav className="w-full shadow-md">
        <Container className="flex justify-between" size={1084}>
          <Group>
            <Title order={1} className="text-2xl">
              인프런
            </Title>
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
            <Button color="primary">최근 강의</Button>
            <ActionIcon>🛒</ActionIcon>
            <Indicator color="red" size={5}>
              <ActionIcon>🔔</ActionIcon>
            </Indicator>
            <Avatar radius="xl" />
          </Group>
        </Container>
      </nav>
      <main className="flex mt-8">
        <Container className="flex w-full" size={1084}>
          <section className="flex-1">
            <Title order={2} className="mb-3 text-xl">
              수강바구니
            </Title>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Checkbox label="전체선택" />
                <Text color="brand" size="sm" className="ml-1">
                  2
                </Text>
                <Text size="sm">/5</Text>
              </div>
              <Button size="xs" variant="outline" color="gray" rightIcon="X">
                선택삭제
              </Button>
            </div>
            <Divider my="sm" color="dark" className="m-0 mt-3" />
            <div className="flex my-3">
              <Text weight="bold">강의</Text>
              <Text color="brand" size="sm" className="ml-1">
                2
              </Text>
              <Text size="sm">/5</Text>
            </div>
            {[1, 2, 3, 4].map((el) => (
              <Lecture key={el} isFirst={el === 1} />
            ))}
          </section>
          <aside className="w-[300px] ml-8">
            <div className="p-[20px] border border-solid rounded-lg border-gray-200">
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
            <div className="p-[20px] mt-4 border border-solid rounded-lg border-gray-200 shadow-lg">
              <Stack>
                <InputWrapper
                  id="coupon"
                  label={
                    <div>
                      쿠폰
                      <Tooltip
                        label="쿠폰에 대한 설명"
                        withArrow
                        className="ml-2"
                      >
                        ℹ️
                      </Tooltip>
                    </div>
                  }
                >
                  <div className="flex">
                    <Input
                      id="coupon"
                      placeholder="01012341234"
                      className="flex-1"
                    />
                    <Button variant="outline" color="gray" className="ml-2">
                      쿠폰선택
                    </Button>
                  </div>
                </InputWrapper>
                <InputWrapper
                  id="point"
                  label={
                    <div>
                      포인트
                      <Tooltip
                        label="포인트에 대한 설명"
                        withArrow
                        className="ml-2"
                      >
                        ℹ️
                      </Tooltip>
                    </div>
                  }
                >
                  <div className="flex">
                    <Input
                      id="point"
                      placeholder="01012341234"
                      className="flex-1"
                    />
                    <Button variant="outline" color="gray" className="ml-2">
                      전액사용
                    </Button>
                  </div>
                </InputWrapper>
                <div>
                  <div className="flex justify-between">
                    <Text size="sm" color="gray">
                      선택상품 금액
                    </Text>
                    <Text size="sm" color="gray">
                      999,999,000원
                    </Text>
                  </div>
                  <div className="flex justify-between">
                    <Text size="sm" color="red">
                      할인금액
                    </Text>
                    <Text size="sm" color="red">
                      -60,000원
                    </Text>
                  </div>
                  <div className="flex justify-between">
                    <Text size="sm" weight="bold">
                      총 결제금액
                    </Text>
                    <Text size="sm" weight="bold">
                      999,000원
                    </Text>
                  </div>
                </div>
                <Button size="lg" color="dark">
                  15% 할인받기
                </Button>
                <Button size="sm" color="primary">
                  결제하기
                </Button>
                <Text size="xs" color="gray">
                  회원 본인은 주문내용을 확인했으며, 구매조건 및
                  개인정보취급방침과 결제에 동의합니다.
                </Text>
              </Stack>
            </div>
            <Container className="flex justify-between mt-5">
              <Text color="gray" size="xs">
                궁금한 점이 있나요?
              </Text>
              <Text color="gray" size="xs">
                문의하기
              </Text>
            </Container>
          </aside>
        </Container>
      </main>
    </>
  );
}

export default Cart;
