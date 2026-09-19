import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "../../components/Badge";

const CATEGORIES = [
  { name: "Next.js", color: "indigo" },
  { name: "React", color: "sky" },
  { name: "Tailwind CSS", color: "emerald" },
  { name: "Fullstack", color: "purple" },
  { name: "Web Dev", color: "amber" },
];

const GRADIENTS = [
  "from-indigo-500 to-violet-600",
  "from-blue-500 to-cyan-600",
  "from-violet-500 to-fuchsia-600",
  "from-emerald-400 to-teal-600",
  "from-rose-500 to-pink-600",
  "from-amber-400 to-orange-500",
];

const getPostDetail = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
};

const getPostComments = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostDetail(id);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết | DevPulse",
    };
  }

  const capitalizedTitle =
    post.title.charAt(0).toUpperCase() + post.title.slice(1);

  return {
    title: `${capitalizedTitle} | DevPulse`,
    description: post.body.slice(0, 150),
  };
}

export default async function BlogPostDetailPage({ params }) {
  const { id } = await params;
  const [postDetail, comments] = await Promise.all([
    getPostDetail(id),
    getPostComments(id),
  ]);

  if (!postDetail) {
    notFound();
  }

  const numericId = parseInt(id, 10) || 1;
  const categoryIndex = (numericId - 1) % CATEGORIES.length;
  const category = CATEGORIES[categoryIndex];
  const gradientClass = GRADIENTS[(numericId - 1) % GRADIENTS.length];
  const readTime = `${(numericId % 4) + 3} min read`;
  const prevId = numericId > 1 ? numericId - 1 : null;
  const nextId = numericId < 100 ? numericId + 1 : null;

  return (
    <div className="bg-slate-50/50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation / Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Blog</span>
          </Link>

          <nav className="flex items-center space-x-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#posts"
              className="hover:text-slate-600 transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold">#{id}</span>
          </nav>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          {/* Visual Header Banner */}
          <div
            className={`h-52 sm:h-72 bg-gradient-to-br ${gradientClass} relative p-6 sm:p-10 flex flex-col justify-between overflow-hidden`}
          >
            {/* Background decorative elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />

            <div className="flex items-center justify-between z-10">
              <Badge label={category.name} color={category.color} />
              <span className="text-xs font-medium text-white/90 bg-black/25 backdrop-blur-md px-3 py-1 rounded-full shadow-2xs">
                {readTime}
              </span>
            </div>
          </div>

          {/* Article Header & Metadata */}
          <div className="p-6 sm:p-10 border-b border-slate-100">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-6 capitalize">
              {postDetail.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                  U{postDetail.userId}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Author #{postDetail.userId}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>19/09/2026</span>
                    <span>•</span>
                    <span>{comments.length} comments</span>
                  </div>
                </div>
              </div>

              {/* Quick Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                  Share:
                </span>
                <button
                  type="button"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-center text-slate-600 text-xs transition-colors"
                  title="Share on Twitter"
                  aria-label="Share article on Twitter"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-center text-slate-600 text-xs transition-colors"
                  title="Copy link"
                  aria-label="Copy article link"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-10 text-slate-700 leading-relaxed text-base sm:text-lg">
            {/* Opening / Summary Paragraph */}
            <p className="font-medium text-slate-800 text-lg sm:text-xl leading-relaxed mb-6">
              {postDetail.body}
            </p>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-2">
                Tag:
              </span>
              {[
                "Next.js 16",
                "React 19",
                "Tailwind CSS v4",
                "Fullstack",
                "Web Development",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Biography Box */}
          <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white text-lg font-bold shadow-md shadow-indigo-100">
                U{postDetail.userId}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Author #{postDetail.userId}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 max-w-md">
                  Kỹ sư phần mềm Fullstack &amp; Tác giả nội dung kỹ thuật. Đam
                  mê xây dựng trải nghiệm web tốc độ cao và kiến trúc phần mềm
                  sạch.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors shadow-2xs self-end sm:self-center"
            >
              Follow Author
            </button>
          </div>
        </article>

        {/* Previous & Next Post Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {prevId ? (
            <Link
              href={`/blog/${prevId}`}
              className="group p-5 bg-white rounded-2xl border border-slate-200/80 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col items-start text-left"
            >
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                <span>←</span> Previous Post
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                Details for Post #{prevId}
              </span>
            </Link>
          ) : (
            <div className="p-5 bg-slate-100/50 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs flex items-center">
              This is the first post
            </div>
          )}

          {nextId ? (
            <Link
              href={`/blog/${nextId}`}
              className="group p-5 bg-white rounded-2xl border border-slate-200/80 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col items-end text-right sm:col-start-2"
            >
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                Next Post <span>→</span>
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                Details for Post #{nextId}
              </span>
            </Link>
          ) : null}
        </div>

        {/* Comments Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
              <span>Comments</span>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
                {comments.length}
              </span>
            </h2>
          </div>

          {/* New Comment Box (Mock UI) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs mb-8">
            <h3 className="text-sm font-bold text-slate-800 mb-4">
              Leave a comment
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your username..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
                />
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Write a comment or share your thoughts here..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                >
                  Send Comment
                </button>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.slice(0, 4).map((comment) => {
              const commenterInitial = comment.name
                ? comment.name.charAt(0).toUpperCase()
                : "C";

              return (
                <div
                  key={comment.id}
                  className="bg-white rounded-2xl border border-slate-200/70 p-5 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {commenterInitial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 capitalize truncate">
                          {comment.name}
                        </h4>
                        <span className="text-[11px] text-slate-400">
                          {comment.email}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
