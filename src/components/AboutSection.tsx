'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Lightbulb,
  Users,
  Zap,
  ListChecks,
  BarChart3,
} from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const el = document.getElementById('about');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: '깔끔한 코드',
      description:
        '유지보수가 쉽고 확장 가능한 구조와 컴포넌트화를 지향합니다.',
    },
    {
      icon: Lightbulb,
      title: '창의적 문제해결',
      description: '사용자·비즈니스·기술을 연결해 실용적인 해법을 도출합니다.',
    },
    {
      icon: Users,
      title: '사용자 리서치',
      description:
        '인터뷰·페르소나·저니맵으로 문제를 정의하고 가설을 세웁니다.',
    },
    {
      icon: ListChecks,
      title: '정보구조·흐름 설계',
      description:
        'IA·플로우·와이어프레임으로 명확한 UX 시나리오를 설계합니다.',
    },
    {
      icon: BarChart3,
      title: '데이터 기반 개선',
      description: '지표 설계·로그 분석·A/B 테스트로 개선 효과를 검증합니다.',
    },
    {
      icon: Zap,
      title: '빠른 학습·실행',
      description: '실험→피드백→반영 사이클을 빠르게 반복하며 성장합니다.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            About Me
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full border text-sm">
              Frontend Developer
            </span>
            <span className="px-3 py-1 rounded-full border text-sm">
              Service Planner
            </span>
            <span className="px-3 py-1 rounded-full border text-sm">
              Web Planner
            </span>
            <span className="px-3 py-1 rounded-full border text-sm">
              UI/UX Planner
            </span>
          </div>

          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            사용자 경험을 중심에 두고 제품을 설계·구현하는
            <br />
            <span className="font-semibold">
              {' '}
              프론트엔드 & 웹/UX 기획 지향형
            </span>{' '}
            메이커입니다.
          </p>
        </div>

        {/* 메인 카드: 이미지 패널 | 콘텐츠 패널 */}
        <div
          className={`
            relative overflow-hidden rounded-3xl border bg-card/60 backdrop-blur
            shadow-sm
            transition-all duration-700
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }
          `}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* 좌측: 이미지 패널 (카드 안에서만 고정, 높이 맞춤) */}
            <aside className="relative lg:col-span-2">
              {/* 장식 배경 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />
              <div className="relative p-8 sm:p-10 h-full flex items-center justify-center">
                <div className="relative aspect-square w-56 sm:w-64 md:w-72 lg:w-80 xl:w-[26rem] rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-lg">
                  <Image
                    src="/profile2.jpg"
                    alt="About Me 프로필 이미지"
                    fill
                    sizes="(min-width:1280px) 26rem, (min-width:1024px) 20rem, (min-width:768px) 18rem, 14rem"
                    priority
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </aside>

            {/* 우측: 콘텐츠 패널 */}
            <main className="lg:col-span-3 border-t lg:border-t-0 lg:border-l">
              <div className="p-8 sm:p-10 space-y-8">
                {/* 소개 문단 */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    프론트엔드 ↔ 기획, E2E로 연결합니다
                  </h3>

                  <p className="text-muted-foreground text-pretty">
                    <span className="font-medium">Frontend</span>: React·React
                    Native·Next.js·TypeScript·Tailwind를 중심으로 접근성과
                    성능을 고려한 UI를 구현합니다. 재사용 가능한 컴포넌트 설계와
                    상태 관리, API 연동, 반응형/다크모드, 디자인 시스템 정렬까지
                    일관되게 맞춥니다.
                  </p>

                  <p className="text-muted-foreground text-pretty">
                    <span className="font-medium">Planning & UX</span>: 요구사항
                    정리 → IA/플로우 → 와이어/프로토타입 → 구현 → 지표 기반
                    개선의 <span className="font-medium">E2E 사이클</span>을
                    주도합니다. 문제정의–가설–실험–검증 프레임으로 접근해
                    전환·이탈·탐색 지표 중심으로 개선을 반복합니다. “의도가
                    보이는 인터랙션”과 간결한 여정을 우선합니다.
                  </p>
                </div>

                {/* 특징 카드들 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <Card
                      key={i}
                      className="h-full border-muted/60 hover:border-primary/40 transition-colors"
                    >
                      <CardContent className="p-6">
                        <f.icon className="h-7 w-7 text-primary mb-3" />
                        <h4 className="font-semibold mb-2">{f.title}</h4>
                        <p className="text-sm text-muted-foreground text-pretty">
                          {f.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* 목표 문장 */}
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    단기적으로는{' '}
                    <span className="font-medium">지표 기반 UX 실험</span>을
                    통해 전환·이탈·탐색 경험을 개선하고, 중장기적으로는{' '}
                    <span className="font-medium">
                      여정 전반을 관통하는 서비스 구조
                    </span>
                    를 설계하는 서비스/웹/UI·UX 기획자이자 프론트엔드 개발자로
                    성장하겠습니다.
                  </p>
                </div>
              </div>
            </main>
          </div>

          {/* 카드 바깥 그림자 보정용 얕은 테두리 */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-border/60" />
        </div>
      </div>
    </section>
  );
}
