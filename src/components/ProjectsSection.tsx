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
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsSection() {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: '등산 도우미 어플',
      description:
        'React Native를 이용한 등산 도우미 어플입니다. 등산로 실시간 트래킹, SOS 기능, 실시간 등산로 이상 신고 기능, 날씨 정보, 커뮤니티 등의 기능을 제공합니다.',
      image: '/Hiking_Planner_logo.png',
      technologies: ['Next.js', 'React Native', 'Bootstrap CSS'],
      github: 'https://github.com/Hiking-Planner',
      demo: 'https://hiking-app-demo.vercel.app',
    },
    {
      title: '동아리 홈페이지',
      description:
        '제가 회장으로 있던 단국대학교 산악부의 보다 편한 운영을 위해 만든 React 기반의 홈페이지입니다. 암벽화 실시간 대여 시스템, 동아리 활동 기록 커뮤니티 등의 기능을 제공합니다.',
      image: '/DKUAC_logo.png',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/DKUAC',
      demo: 'https://dkuac.vercel.app',
    },
    {
      title: '주택 청약 도우미 어플',
      description:
        '주택 청약 통장의 가입률은 높지만, 실제 청약 신청률은 낮다는 점에 착안하여 개발한 Vue 기반의 주택 청약 도우미 웹앱입니다. 청약 일정 알림, 청약 가점 계산기, 청약 정보 제공 등의 기능을 제공하여 기존 청약 사용자 및 신규 청약 사용자 모두에게 유용한 앱입니다.',
      image: '/zibi_logo.png',
      technologies: [
        'Vue',
        'JavaScript',
        'Tailwind CSS',
        'Chart.js',
        'Lucide Icons',
        'Ant Design',
      ],
      github: 'https://github.com/PJT-16-3',
      demo: 'https://zibi.vercel.app',
    },
    {
      title: '여행 계획 어플',
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
      demo: 'https://travel-app.vercel.app',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            제가 개발한 주요 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* 이미지 영역 */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* 프로젝트 설명 */}
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-pretty">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* 기술 스택 + 버튼 */}
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
