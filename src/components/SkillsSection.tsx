'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress, Tooltip } from 'antd';
import { Wrench, Boxes, Code2 } from 'lucide-react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.12 }
    );
    const el = document.getElementById('skills');
    if (el) io.observe(el);
    return () => io.disconnect();
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
    'Chart.js',
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
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
            Skill Matrix
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Skills
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            제가 다룰 수 있는 언어, 프레임워크, 그리고 협업 도구들입니다.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Languages & Core */}
          <Card
            className={`group h-full border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <CardTitle className="text-center text-xl">
                  Languages & Core
                </CardTitle>
              </div>
              <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </CardHeader>
            <CardContent className="space-y-4">
              {languageSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border p-3 bg-background/60"
                >
                  <div className="mb-2 flex items-center justify-between text-sm font-medium">
                    <span className="text-foreground/90">{skill.name}</span>
                    <span className="tabular-nums text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    percent={skill.level}
                    size="small"
                    status="active"
                    strokeColor="#0891b2"
                    trailColor="rgba(8,145,178,0.15)"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Frameworks / Libraries */}
          <Card
            className={`group h-full border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center gap-2">
                <Boxes className="h-5 w-5 text-primary" />
                <CardTitle className="text-center text-xl">
                  Frameworks / Libraries
                </CardTitle>
              </div>
              <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </CardHeader>
            <CardContent className="space-y-4">
              {frameworkSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border p-3 bg-background/60"
                >
                  <div className="mb-2 flex items-center justify-between text-sm font-medium">
                    <span className="text-foreground/90">{skill.name}</span>
                    <span className="tabular-nums text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    percent={skill.level}
                    size="small"
                    status="active"
                    strokeColor="#0891b2"
                    trailColor="rgba(8,145,178,0.15)"
                  />
                </div>
              ))}

              {/* Libraries Chips */}
              <div className="pt-2">
                <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                  Libraries
                </div>
                <div className="flex flex-wrap gap-2">
                  {libraries.map((lib, idx) => (
                    <Tooltip title={lib} key={idx}>
                      <span className="px-3 py-1 text-sm rounded-md border bg-background/70 hover:bg-background transition">
                        {lib}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools & Others */}
          <Card
            className={`group h-full border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '240ms' }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                <CardTitle className="text-center text-xl">
                  Tools & Others
                </CardTitle>
              </div>
              <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-md border bg-background/70 hover:bg-background transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
