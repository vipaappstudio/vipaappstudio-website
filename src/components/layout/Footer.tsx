export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} VIPA App Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}