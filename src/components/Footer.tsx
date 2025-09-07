export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-primary">정성훈</div>
          <p className="text-muted-foreground">
            프론트엔드 개발자 | React & Next.js 전문
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 정성훈. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
