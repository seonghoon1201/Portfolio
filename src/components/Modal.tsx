'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  maxWidthClass?: string; // ex) "max-w-2xl"
};

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  maxWidthClass = 'max-w-2xl',
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  // Create portal root once
  useEffect(() => {
    const el = document.createElement('div');
    el.setAttribute('id', 'modal-root');
    document.body.appendChild(el);
    setPortalEl(el);
    return () => {
      document.body.removeChild(el);
      setPortalEl(null);
    };
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus trap + return focus
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      previouslyFocused.current?.focus?.();
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  const onBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // 오버레이 빈 영역 클릭 시에만 닫기
      if (e.currentTarget === e.target) onClose();
    },
    [onClose]
  );

  if (!open || !portalEl) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onMouseDown={onBackdropClick}
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        {...(title ? { 'aria-labelledby': 'modal-title' } : {})}
        {...(subtitle ? { 'aria-describedby': 'modal-subtitle' } : {})}
        ref={dialogRef}
        className={`
          fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[92vw] sm:w-[90vw] ${maxWidthClass}
          rounded-2xl border bg-card/90 text-foreground shadow-xl backdrop-blur
          animate-[fadeInUp_0.24s_ease-out]
        `}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <div className="min-w-0">
            {title && (
              <h3
                id="modal-title"
                className="text-xl sm:text-2xl font-semibold leading-tight"
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p
                id="modal-subtitle"
                className="mt-1 text-sm text-muted-foreground"
              >
                {subtitle}
              </p>
            )}
          </div>

          <button
            ref={closeBtnRef}
            aria-label="모달 닫기"
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground/80 hover:text-foreground hover:bg-muted/60 transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-border" />

        {/* Body */}
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">{children}</div>
      </div>
    </div>,
    portalEl
  );
}
