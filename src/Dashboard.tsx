import {
  Avatar,
  Badge,
  Button,
  Grid,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const menus = [
  {
    title: 'Home',
    list: [{ title: '대시보드' }, { title: '블로그' }, { title: '알림' }],
  },
  {
    title: '학습 관리',
    list: [
      { title: '내 학습' },
      { title: '강의노트' },
      { title: '멘토링' },
      { title: '작성한 게시글' },
      { title: '수강전 문의' },
    ],
  },
  {
    title: '수강신청 관리',
    list: [
      { title: '수강바구니' },
      { title: '좋아요' },
      { title: '쿠폰함' },
      { title: '포인트' },
      { title: '구매내역' },
    ],
  },
  {
    title: '설정',
    list: [{ title: '프로필' }, { title: '알림 설정' }],
  },
];

function Box({
  title,
  body,
  bottom,
}: {
  title: string;
  body: ReactNode;
  bottom?: ReactNode;
}) {
  return (
    <Paper
      shadow="sm"
      p="md"
      sx={{ minHeight: '254px', display: 'flex', flexDirection: 'column' }}
    >
      <Title order={3} mb="md">
        {title}
      </Title>
      {body}
      {bottom && <div className="mt-auto flex justify-end">{bottom}</div>}
    </Paper>
  );
}

function Dashboard() {
  return (
    <main className="bg-gray-200">
      <header className="bg-gray-800 p-4">
        <Title order={2} sx={{ color: 'white' }}>
          대시보드
        </Title>
      </header>
      <div className="flex p-4">
        <nav className="w-52">
          <ul className="list-none">
            {menus.map(({ title, list }, index) => {
              return (
                <li key={index + title} className="my-2">
                  <Text color="gray" size="sm">
                    {title}
                  </Text>
                  <ul className="list-none pl-3">
                    {list.map(({ title }, index) => {
                      return (
                        <li key={title + index} className="my-2">
                          <Button
                            variant="subtle"
                            color="dark"
                            sx={{
                              width: '100%',
                              '.mantine-Button-inner': {
                                justifyContent: 'flex-start',
                              },
                              height: 'auto',
                              paddingTop: '10px',
                              paddingBottom: '10px',
                            }}
                          >
                            {title}
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
        <section className="p-10" style={{ width: 'calc(100% - 13rem)' }}>
          <Grid gutter="lg">
            <Grid.Col span={6}>
              <Box
                title="😀이름님 프로필"
                body={
                  <div className="flex ">
                    <Avatar size="lg" radius={100} />
                    <Text size="lg" ml="sm">
                      이름님, 남은 하루도 화이팅!! 👋🏼
                    </Text>
                  </div>
                }
                bottom={
                  <Button
                    px="xs"
                    variant="subtle"
                    color="gray"
                    component={Link}
                    to="/"
                  >
                    프로필 수정하기
                  </Button>
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                title="📖최근 학습 강의"
                body={
                  <div>
                    <div className="mb-3">
                      <span className="mr-1 font-bold">무슨무슨 강의</span>
                      <span className="text-sm">(4시간 전)</span>
                    </div>
                    <label className="text-sm">2강/26강</label>
                    <Progress value={30} label="30%" size="lg" />
                  </div>
                }
                bottom={
                  <Group>
                    <Button size="lg" component={Link} to="/">
                      내모든 강의
                    </Button>
                    <Button size="lg" color="red" component={Link} to="/">
                      이어서 학습하기
                    </Button>
                  </Group>
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                title="📝최근 내 노트"
                body={
                  <div className="flex justify-between">
                    <span>얄팍한 GraphQL과 Apollo</span>
                    <span>10달 전</span>
                  </div>
                }
                bottom={
                  <Button
                    px="xs"
                    variant="subtle"
                    color="gray"
                    component={Link}
                    to="/"
                  >
                    내노트 전체보기
                  </Button>
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                title="🏃🏻학습 통계"
                body={
                  <Group spacing="xl" className="flex justify-around">
                    <div className="flex flex-col items-center">
                      <div className="text-5xl font-extrabold text-gray-400 mb-4">
                        5
                      </div>
                      <div>완료 강의수</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-5xl font-extrabold text-gray-400 mb-4">
                        133
                      </div>
                      <div>완료 수업수</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-5xl font-extrabold text-gray-400 mb-4">
                        1
                      </div>
                      <div>획득 수료증</div>
                    </div>
                  </Group>
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                title="🎖My Skills"
                body={
                  <Group className="list-none flex m-0 p-0">
                    <Badge
                      sx={{
                        paddingRight: 0,
                        '.mantine-Badge-rightSection': {
                          marginLeft: '0.25rem',
                        },
                      }}
                      rightSection={
                        <div className="rounded-r-[32px] bg-gray-100 pl-1 pr-2">
                          1
                        </div>
                      }
                    >
                      GraphQL
                    </Badge>
                    <Badge
                      color="blue"
                      sx={{
                        paddingRight: 0,
                        '.mantine-Badge-rightSection': {
                          marginLeft: '0.25rem',
                        },
                      }}
                      rightSection={
                        <div className="rounded-r-[32px] bg-gray-100 pl-1 pr-2">
                          3
                        </div>
                      }
                    >
                      java
                    </Badge>
                    <Badge
                      color="red"
                      sx={{
                        paddingRight: 0,
                        '.mantine-Badge-rightSection': {
                          marginLeft: '0.25rem',
                        },
                      }}
                      rightSection={
                        <div className="rounded-r-[32px] bg-gray-100 pl-1 pr-2">
                          1
                        </div>
                      }
                    >
                      javascript
                    </Badge>
                  </Group>
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                title="🏆My Certificates"
                body={
                  <SimpleGrid cols={3}>
                    <div className="flex flex-col items-center">
                      <Avatar size="xl" />
                      <p>수료증</p>
                    </div>
                  </SimpleGrid>
                }
                bottom={
                  <Button
                    px="xs"
                    variant="subtle"
                    color="gray"
                    component={Link}
                    to="/"
                  >
                    수료증 전체보기
                  </Button>
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                title="📚최근 학습중인 강의"
                body={
                  <div className="flex justify-between">
                    <span>얄팍한 GraphQL과 Apollo</span>
                    <span>10달 전</span>
                  </div>
                }
                bottom={
                  <Button
                    px="xs"
                    variant="subtle"
                    color="gray"
                    component={Link}
                    to="/"
                  >
                    내강의 전체보기
                  </Button>
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                title="🎓완료한 강의"
                body={
                  <div className="flex justify-between">
                    <span>얄팍한 GraphQL과 Apollo</span>
                    <span>10달 전</span>
                  </div>
                }
                bottom={
                  <Button
                    px="xs"
                    variant="subtle"
                    color="gray"
                    component={Link}
                    to="/"
                  >
                    내강의 전체보기
                  </Button>
                }
              />
            </Grid.Col>
          </Grid>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
