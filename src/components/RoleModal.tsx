'use client';

import React from 'react';
import Modal from './Modal';
import { Badge } from '@/components/ui/badge';
import { ClipboardList, Cog, GitBranch, Layout, Rocket } from 'lucide-react';

type RoleBlock = {
  label: string;
  bullets: string[];
  tags?: string[];
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ProjectRoleData = {
  title: string;
  period?: string;
  summary?: string;
  roles: RoleBlock[];
};

type RoleModalProps = {
  open: boolean;
  onClose: () => void;
  data: ProjectRoleData | null;
};

const ICONS = [Layout, Cog, GitBranch, Rocket, ClipboardList];

export default function RoleModal({ open, onClose, data }: RoleModalProps) {
  if (!data) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={data.title}
      subtitle={[data.period, data.summary].filter(Boolean).join(' · ')}
      maxWidthClass="max-w-2xl"
    >
      <div className="space-y-5">
        {data.roles.map((r, idx) => {
          const Icon = r.icon ?? ICONS[idx % ICONS.length];
          return (
            <div key={idx} className="rounded-xl border bg-background/70 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <h4 className="font-semibold">{r.label}</h4>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {r.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="bg-background/70"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
