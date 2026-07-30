import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          🚀 Welcome to VIPA App Studio
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
          Building Beautiful Android Apps
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          We create innovative, user-friendly mobile applications that help
          millions of users enjoy photography, creativity and productivity.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/apps"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            View Our Apps
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 px-6 py-3 text-slate-700 transition hover:bg-slate-100"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}