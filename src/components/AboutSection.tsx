'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: '깔끔한 코드',
      description: '유지보수가 쉽고 확장 가능한 코드를 작성합니다.',
    },
    {
      icon: Lightbulb,
      title: '창의적 사고',
      description:
        '문제를 다양한 관점에서 접근하여 혁신적인 솔루션을 제시합니다.',
    },
    {
      icon: Users,
      title: '팀워크',
      description:
        '동료들과의 원활한 소통과 협업을 통해 최고의 결과를 만들어냅니다.',
    },
    {
      icon: Zap,
      title: '빠른 학습',
      description: '새로운 기술과 트렌드를 빠르게 습득하고 적용합니다.',
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
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            사용자 중심의 웹 경험을 만드는 것에 열정을 가진 프론트엔드
            개발자입니다.
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <Image
                src="/about-profile.png"
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
                프론트엔드 개발자로서의 여정
              </h3>
              <p className="text-muted-foreground text-pretty">
                사용자가 직접 마주하는 인터페이스를 만드는 일에 큰 보람을
                느낍니다. 단순히 기능이 작동하는 것을 넘어서, 사용자가 즐겁고
                편리하게 사용할 수 있는 웹 애플리케이션을 만드는 것이 저의
                목표입니다.
              </p>
              <p className="text-muted-foreground text-pretty">
                React, Next.js를 주로 사용하며, 최신 웹 기술 트렌드를 지속적으로
                학습하고 프로젝트에 적용하고 있습니다.
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
          </div>
        </div>
      </div>
    </section>
  );
}
