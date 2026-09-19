import Link from "next/link";
import Badge from "./Badge";

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

export default function BlogCard({ post }) {
  // Gán nhãn chủ đề và màu sắc tương ứng theo id
  const categoryIndex = (post.id - 1) % CATEGORIES.length;
  const category = CATEGORIES[categoryIndex];
  const gradientClass = GRADIENTS[(post.id - 1) % GRADIENTS.length];
  const readTime = `${(post.id % 4) + 3} phút đọc`;

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Card Header / Visual Banner */}
      <div
        className={`h-36 bg-gradient-to-br ${gradientClass} relative p-5 flex flex-col justify-between overflow-hidden`}
      >
        {/* Background decorative circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-sm pointer-events-none group-hover:scale-125 transition-transform duration-500" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10 blur-sm pointer-events-none" />

        <div className="flex items-center justify-between z-10">
          <Badge
            label={post.category || category.name}
            color={category.color}
          />
          <span className="text-xs font-medium text-white/90 bg-black/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
            {readTime}
          </span>
        </div>

        <div className="z-10 text-white/80 text-xs font-medium flex items-center gap-1.5">
          <span>Bài viết #{post.id}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2.5 leading-snug">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-6">
            {post.body}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              U{post.userId}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-800">
                Tác giả #{post.userId}
              </span>
              <span className="text-[11px] text-slate-400">Thành viên</span>
            </div>
          </div>

          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-700 group/link"
          >
            Đọc tiếp
            <svg
              className="w-3.5 h-3.5 ml-1 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
