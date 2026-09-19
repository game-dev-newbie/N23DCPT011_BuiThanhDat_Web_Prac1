import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-950">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Dev<span className="text-indigo-400">Pulse</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Không gian chia sẻ kiến thức lập trình Fullstack, xu hướng công
              nghệ mới và tài nguyên chất lượng dành cho các lập trình viên hiện
              đại.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Next.js 16 &amp; Tailwind v4
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Khám phá
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <a href="#posts" className="hover:text-white transition-colors">
                  Bài viết mới nhất
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="hover:text-white transition-colors"
                >
                  Chủ đề thịnh hành
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Tác giả &amp; Dự án
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stacks */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Công nghệ
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400 hover:text-slate-300 cursor-default">
                  Next.js App Router
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-300 cursor-default">
                  React 19 Server Components
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-300 cursor-default">
                  Tailwind CSS v4
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-300 cursor-default">
                  RESTful API Integration
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Bản tin công nghệ
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nhận thông báo khi có bài viết và tài liệu lập trình hữu ích mới
              nhất.
            </p>
            <form onSubmit={undefined} className="space-y-2" action="#">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-indigo-500 transition-colors"
                />
              </div>
              <button
                type="button"
                className="w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Đăng ký nhận tin
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} DevPulse Lab. Bài thực hành lập trình
            Web Fullstack.
          </p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Điều khoản
            </span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Bảo mật
            </span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Hỗ trợ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
