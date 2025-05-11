'use client';

export default function FitToScreenLayout({ header, children, footer }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      {header}

      {/* Main content that takes natural height */}
      <main className="px-4 py-8">
        {children}
      </main>

      {/* Footer should be here always, just below content */}
      {footer}
    </div>
  );
}
