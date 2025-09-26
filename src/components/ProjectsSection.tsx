'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, UserSquare2 } from 'lucide-react';
import Image from 'next/image';
import RoleModal, { ProjectRoleData } from '@/components/RoleModal';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  readme: string; // 보관용(표시 안 함)
  status?: string;
  roleData: ProjectRoleData;
};

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectRoleData | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.12 }
    );
    const el = document.getElementById('projects');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: '등산 도우미 어플 Hiking Planner',
      description:
        'React Native를 이용한 등산 도우미 어플입니다. 등산로 실시간 트래킹, SOS 기능, 실시간 등산로 이상 신고 기능, 날씨 정보, 커뮤니티 등의 기능을 제공합니다.',
      image: '/Hiking_Planner_logo.png',
      technologies: ['Next.js', 'React Native', 'Bootstrap CSS'],
      github: 'https://github.com/Hiking-Planner',
      readme:
        'https://github.com/Hiking-Planner/.github/blob/main/profile/README.md',
      roleData: {
        title: 'Hiking Planner',
        period: '2024.02 – 2024.11', // ⬅ 기간 보강
        summary: '아이디어·UI/UX·팀 리드 · 인증/트래킹/신고 FE 개발',
        roles: [
          // ✅ 네가 추가로 알려준 내용(팀장/아이디어 총괄) — 기존 항목 유지 + 보강
          {
            label: '팀 리드 & 아이디어/제품 기획',
            bullets: [
              '서비스 전체 아이디어를 제시하고 핵심 기능(실시간 트래킹, SOS, 이상 신고, 날씨, 커뮤니티) 도출.',
              '프로젝트 로드맵/마일스톤 수립, 우선순위 및 리스크 관리, 주간 스탠드업 운영.',
            ],
            tags: ['Leadership', 'PM', 'Roadmap'],
          },
          // ⬇ 기존에 있던 블록들 유지
          {
            label: '기획 & UX',
            bullets: [
              '문제정의(산길 이탈/조난 리스크) 기반 핵심 기능 도출: 실시간 트래킹, SOS, 신고.',
              'IA/플로우/와이어 작성, MVP 범위와 릴리스 로드맵 수립.',
            ],
            tags: ['IA', 'User Flow', 'Wireframe'],
          },
          {
            label: '프론트엔드 (RN)',
            bullets: [
              'React Native 기반 구조 설계: 네비게이션/상태관리/권한 처리.',
              'SOS 빠른 호출 UI, 트래킹 화면(지도/상태 배지/일시정지) 구현.',
              '날씨 API 연동 및 캐싱, 커뮤니티 피드 리스트/상세 구현.',
            ],
            tags: ['React Native', 'Expo', 'Location', 'Permissions'],
          },
          // ✅ 네가 맡았다고 한 인증 영역 보강(새 블록)
          {
            label: '인증/계정',
            bullets: [
              '회원가입/로그인 플로우 전담(입력 검증, 에러/로딩 상태, 토큰 보관 전략).',
              '세션 만료·재인증 케이스 UX 설계 및 예외 처리.',
            ],
            tags: ['Auth', 'Form UX'],
          },
          {
            label: '품질 & 배포',
            bullets: [
              '크래시·성능 로그 수집 지표 정의, 크리티컬 경로 테스트 시나리오 수립.',
              '스토어 배포 준비: 아이콘/런치 스크린/권한 문구/프라이버시 검사.',
            ],
            tags: ['QA', 'Release'],
          },
        ],
      },
    },

    {
      title: '주택 청약 도우미 어플 ZIBI',
      description:
        '주택 청약 통장의 가입률은 높지만, 실제 청약 신청률은 낮다는 점에 착안하여 개발한 Vue 기반의 주택 청약 도우미 웹앱입니다. 청약 일정 알림, 청약 가점 계산기, 청약 정보 제공 등의 기능을 제공하여 기존 청약 사용자 및 신규 청약 사용자 모두에게 유용한 앱입니다.',
      image: '/zibi_logo.png',
      technologies: [
        'Vue',
        'JavaScript',
        'Pinia',
        'Vite',
        'Tailwind CSS',
        'Chart.js',
        'Lucide Icons',
        'Ant Design',
      ],
      github: 'https://github.com/PJT-16-3',
      readme: 'https://github.com/PJT-16-3/.github/blob/main/profile/README.md',
      roleData: {
        title: 'ZIBI (청약 도우미)',
        period: '2025.07 – 2025.08', // ⬅ 기간 보강
        summary: '팀장 · UI/UX · FE 리드 · 인증/계좌 연동 · 청약 상세',
        roles: [
          // ✅ 네가 추가로 말한 팀장 역할 보강(새 블록)
          {
            label: '팀 리드 & 기획',
            bullets: [
              '팀장으로 일정/범위/리스크 관리 및 의사결정 주도.',
              'UX 목표(신규/기존 사용자 모두의 진입장벽 완화) 정의 및 핵심 플로우 설계.',
            ],
            tags: ['Leadership', 'Planning'],
          },
          // ⬇ 기존 블록 유지
          {
            label: 'FE 리드 (Vue)',
            bullets: [
              'Vue 3 + Pinia + Vite 구조 설계, 공통 컴포넌트/레이아웃 정리.',
              '가점 계산 플로우(다단계 질문) UI/상태/결과 차트 구현.',
              '선호 지역/평수/가격 Pinia 스토어 및 추천 리스트 바인딩.',
            ],
            tags: ['Vue 3', 'Pinia', 'Vite', 'Tailwind'],
          },
          {
            label: 'UX & 디자인 시스템',
            bullets: [
              'Figma 기준 색/타이포/간격 시스템화, 다크모드/반응형 정렬.',
              'Kakao Map/Marker/카드 인터랙션 및 접근성 점검.',
            ],
            tags: ['Design System', 'A11y'],
          },
          // ✅ 추가 요청: 인증/계좌연결/청약상세
          {
            label: '인증/계좌 연동',
            bullets: [
              '로그인/회원가입 플로우 구현 및 예외 처리.',
              '청약 통장 계좌 연동·검증(마스킹/재시도 UX) 처리.',
            ],
            tags: ['Auth', 'Account Linking'],
          },
          {
            label: '주요 화면',
            bullets: [
              '청약 상세보기(요약·자격·지역/평형 정보·신청 가이드) 설계/구현.',
              '리스트↔상세 탐색 흐름 최적화(필터/정렬/상세 전환).',
            ],
            tags: ['Detail View', 'IA'],
          },
          {
            label: 'PWA & 품질',
            bullets: [
              'PWA 적용(아이콘/스플래시/오프라인 캐시), LCP 개선(이미지 lazy/sizes).',
            ],
            tags: ['PWA', 'Lighthouse'],
          },
        ],
      },
    },

    {
      title: '여행 계획 어플 여담',
      description:
        'Tour API 공모전에 제출한 React기반의 여행 계획 웹앱입니다. AI를 이용한 여행 일정 자동 최적화 및 생성, 장바구니, 여행 일기 커뮤니티 등의 기능을 제공합니다.',
      image: '/yeodam.png',
      technologies: [
        'React',
        'JavaScript',
        'Zustand',
        'Tailwind CSS',
        'Lucide Icons',
        'Ant Design',
      ],
      github: 'https://github.com/YeoDamHuman',
      readme:
        'https://github.com/YeoDamHuman/.github/blob/main/profile/README.md',
      roleData: {
        title: '여담 (여행 계획 앱)',
        period: '2025.05 – 2025.09', // ⬅ 기간 보강
        summary: '프론트엔드 · 인증 · 장바구니/일정/지도 플로우 구현',
        roles: [
          // ⬇ 기존 블록 유지
          {
            label: '프론트엔드',
            bullets: [
              'React + Zustand로 플로우/상태 설계(위치→날짜→스타일→예산→초대).',
              '장바구니 모달(금액 입력)/추천/필터/상세 모달 구현.',
              '일정 결과 페이지(일자별 카드, Kakao Map, 하단 고정 CTA) 구현.',
            ],
            tags: ['React', 'Zustand', 'Tailwind', 'Kakao Map'],
          },
          {
            label: 'API 연동 & 최적화',
            bullets: [
              'Tour API 검색/지역코드 매핑, 이미지 fallback·sizes 최적화.',
              '일정 자동 생성/최적화 API 와이어업 및 오류 핸들링.',
            ],
            tags: ['API', 'Optimization'],
          },
          // ✅ 추가 요청: 인증 담당 명시(새 블록)
          {
            label: '인증',
            bullets: [
              '로그인/회원가입 플로우 구현, 토큰/세션 상태 관리 및 예외 케이스 처리.',
            ],
            tags: ['Auth'],
          },
          // 기존에 있던 협업·배포가 있었다면 유지하고 싶다면 아래 주석 해제
          // {
          //   label: '협업 & 배포',
          //   bullets: [
          //     '컴포넌트 규칙/코드 스타일 가이드 합의, PR 리뷰.',
          //     'Vercel 배포/환경변수/도메인 관리.',
          //   ],
          //   tags: ['Vercel', 'PR Review'],
          // },
        ],
      },
    },

    {
      title: '동아리 홈페이지 DKUAC',
      description:
        '제가 회장으로 있던 단국대학교 산악부의 보다 편한 운영을 위해 만든 React 기반의 홈페이지입니다. 암벽화 실시간 대여 시스템, 동아리 활동 기록 커뮤니티 등의 기능을 제공합니다.',
      image: '/DKUAC_logo.png',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/DKUAC',
      readme: 'https://github.com/DKUAC/.github/blob/main/profile/README.md',
      roleData: {
        title: 'DKUAC Club Website',
        period: '2024.07 – 2024.12', // ⬅ 기간 보강
        summary: '단독 프론트엔드 · 운영/유지보수 · 장비 대여/커뮤니티',
        roles: [
          // ⬇ 기존 블록 유지
          {
            label: '서비스 설계',
            bullets: [
              '운영 Pain Point 인터뷰 → 요구사항 정리 및 우선순위 확정.',
              '장비 대여·반납 프로세스(알림/패널티/재고) 정의.',
            ],
            tags: ['Interview', 'Requirement'],
          },
          {
            label: '프론트엔드',
            bullets: [
              'React + Tailwind로 대여/반납 플로우 UI 구현, 재고 배지/필터.',
              '활동 기록(게시판) 목록/상세/작성/수정/권한 UI 구현.',
            ],
            tags: ['React', 'Tailwind CSS'],
          },
          // ✅ 추가 요청: 단독 FE & 유지보수 강조(새 블록)
          {
            label: '운영 & 유지보수',
            bullets: [
              '프론트엔드를 단독으로 담당하여 전역 구조·라우팅·상태 설계 및 전체 UI 구현.',
              '운영 이슈 대응, UX 개선, 온보딩/운영 매뉴얼 문서화.',
              '대여율/미반납/활동량 지표 대시보드(간이) 구성.',
            ],
            tags: ['Maintenance', 'Docs', 'Dashboard'],
          },
        ],
      },
    },
  ];

  const onOpenRole = (data: ProjectRoleData) => {
    setSelected(data);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
            Selected Works
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Projects
          </h2>
          <p className="mt-3 text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            제가 개발한 주요 프로젝트들을 소개합니다.
          </p>
        </div>

        {/* 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Card
              key={p.title}
              className={`group overflow-hidden border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* 이미지 (클릭 시 역할 모달) */}
              <button
                type="button"
                onClick={() => onOpenRole(p.roleData)}
                className="relative w-full text-left"
                aria-label={`${p.title} 역할 보기`}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={p.title}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 2}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* 상태 리본 */}
                {p.status && (
                  <div className="pointer-events-none absolute left-0 top-0">
                    <span className="absolute -left-10 -top-10 rotate-[-45deg] bg-primary text-primary-foreground px-16 py-1 text-[11px] font-semibold shadow-sm">
                      {p.status}
                    </span>
                  </div>
                )}
              </button>

              {/* 본문 */}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </CardTitle>
                <CardDescription className="text-pretty">
                  {p.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* 스택 */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="bg-background/70"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* 버튼: GitHub + 역할(README 대체) */}
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  {/* README 대신 역할 모달 오픈 */}
                  <Button
                    size="sm"
                    onClick={() => onOpenRole(p.roleData)}
                    aria-label={`${p.title} 역할/기여 열기`}
                  >
                    <UserSquare2 className="mr-2 h-4 w-4" />
                    역할
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 역할/기여 모달 */}
      <RoleModal open={open} onClose={() => setOpen(false)} data={selected} />
    </section>
  );
}
