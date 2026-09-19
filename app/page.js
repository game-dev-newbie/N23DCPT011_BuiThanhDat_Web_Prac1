import BlogCard from "./components/BlogCard";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }
  return res.json();
};

export default async function HomePage() {
  const posts = await getPosts();
  const displayPosts = posts.slice(0, 12);

  const CATEGORY_TABS = [
    { name: "Tất cả bài viết", active: true },
    { name: "Next.js 16", active: false },
    { name: "React 19", active: false },
    { name: "Tailwind CSS", active: false },
    { name: "Fullstack Tips", active: false },
    { name: "Kiến trúc Web", active: false },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen">
      {/* Main Content Section */}
      <section
        id="posts"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        {/* Category Filter Tabs */}
        <div
          id="categories"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {CATEGORY_TABS.map((tab, idx) => (
            <button
              key={idx}
              type="button"
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                tab.active
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100/80 hover:text-slate-900"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Cập nhật mới
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Bài Viết Mới Nhất
            </h2>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs self-start sm:self-auto">
            Hiển thị{" "}
            <span className="text-slate-900 font-bold">
              {displayPosts.length}
            </span>{" "}
            bài viết
          </span>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {displayPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
