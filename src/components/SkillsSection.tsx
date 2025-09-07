'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from 'antd';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const languageSkills = [
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 40 },
    { name: 'HTML5', level: 80 },
    { name: 'CSS3', level: 80 },
  ];

  const frameworkSkills = [
    { name: 'React', level: 80 },
    { name: 'Vue', level: 70 },
    { name: 'React Native', level: 70 },
    { name: 'Next.js', level: 60 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Bootstrap CSS', level: 70 },
  ];

  const libraries = [
    'Zustand',
    'Pinia',
    'Redux',
    'Ant Design',
    'ShadCN UI',
    'Radix UI',
    'Chart.js',
    'Framer Motion',
  ];

  const tools = [
    'Git',
    'GitHub',
    'Vercel',
    'Figma',
    'Notion',
    'Slack',
    'Postman',
    'Swagger',
    'VS Code',
    'IntelliJ',
    'Android Studio',
    'Xcode',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            제가 다룰 수 있는 언어, 프레임워크, 그리고 협업 도구들입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages & Core */}
          <Card
            className={`hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl text-center">
                Languages & Core
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languageSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress
                    percent={skill.level}
                    size="small"
                    strokeColor="#0891b2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Frameworks / Libraries */}
          <Card
            className={`hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <CardHeader>
              <CardTitle className="text-xl text-center">
                Frameworks / Libraries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {frameworkSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress
                    percent={skill.level}
                    size="small"
                    strokeColor="#0891b2"
                  />
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-4">
                {libraries.map((lib, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary"
                  >
                    {lib}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Others */}
          <Card
            className={`hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <CardHeader>
              <CardTitle className="text-xl text-center">
                Tools & Others
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary"
                >
                  {tool}
                </span>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}