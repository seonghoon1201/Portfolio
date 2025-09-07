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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // 프론트엔드 + 웹 기획 + UI/UX 기획 역량을 모두 드러내는 포인트
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
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            About Me
          </h2>

          {/* 역할 배지: 세 역할을 명확히 어필 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full border text-sm">
              Frontend Developer
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
            <span className="font-semibold">
              {' '}
              프론트엔드 & 웹/UX 기획 지향형
            </span>{' '}
            메이커입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <Image
                src="/profile.jpg"
                alt="About Me 프로필 이미지"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                프론트엔드 ↔ 기획, E2E로 연결합니다
              </h3>

              {/* 프론트엔드 개발자 포인트 */}
              <p className="text-muted-foreground text-pretty">
                <span className="font-medium">Frontend</span>:
                React·Next.js·TypeScript·Tailwind를 중심으로 접근성과 성능을
                고려한 UI를 구현합니다. 재사용 가능한 컴포넌트 설계와 상태 관리,
                API 연동, 반응형/다크모드, 디자인 시스템 정렬까지 일관되게
                맞춥니다.
              </p>

              {/* 웹/UX 기획자 포인트 */}
              <p className="text-muted-foreground text-pretty">
                <span className="font-medium">Planning & UX</span>: 요구사항
                정리 → IA/플로우 → 와이어/프로토타입 → 구현 → 지표 기반 개선의{' '}
                <span className="font-medium">E2E 사이클</span>을 주도합니다.
                문제정의–가설–실험–검증 프레임으로 접근해 전환·이탈·탐색 지표
                중심으로 개선을 반복합니다. “의도가 보이는 인터랙션”과 간결한
                여정을 우선합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 목표 문장: 세 역할을 모두 엮어 마무리 */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                단기적으로는{' '}
                <span className="font-medium">지표 기반 UX 실험</span>을 통해
                전환·이탈·탐색 경험을 개선하고, 중장기적으로는{' '}
                <span className="font-medium">
                  여정 전반을 관통하는 서비스 구조
                </span>
                를 설계하는 프론트엔드 개발자이자 웹/UI·UX 기획자로
                성장하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
