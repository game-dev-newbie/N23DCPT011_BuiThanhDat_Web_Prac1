# Bài Thực Hành 1: Ứng Dụng Blog Tin Tức Với Next.js & Tailwind CSS

## 👤 Thông Tin Sinh Viên

- **Họ và tên:** Bùi Thành Đạt
- **Mã sinh viên:** N23DCPT011
- **Học phần:** Lập trình Web Fullstack (Web Fullstack Development)
- **Kho lưu trữ:** `game-dev-newbie/N23DCPT011_BuiThanhDat_Web_Prac1`
- **Domain lab:** *https://lab-nextjs-web-prac1.vercel.app/*

---

## 📖 Giới Thiệu Nội Dung Bài Làm

Dự án là một ứng dụng Web Blog công nghệ hiện đại mang tên **DevPulse**, được xây dựng dựa trên nền tảng **Next.js 16 (App Router)** và thư viện giao diện **Tailwind CSS v4**. Ứng dụng minh họa các kỹ thuật phát triển web fullstack hiện đại, bao gồm Server Components, Dynamic Routing, Server-Side Data Fetching, và thiết kế UI/UX tinh tế.

### ✨ Các Tính Năng Nổi Bật

1. **Header & Navigation ([`Header.js`](app/components/Header.js)):**
   - Thiết kế dạng **Sticky Glassmorphism** (cố định trên cùng với hiệu ứng nền kính mờ khi cuộn chuột).
   - Logo thương hiệu nổi bật với biểu tượng công nghệ và chữ chuyển sắc (gradient text).
   - Thanh điều hướng liên kết và nút bấm kêu gọi hành động (_Subscribe_).

2. **Trang Chủ ([`page.js`](app/page.js)):**
   - **Bộ lọc danh mục**: Thanh tab cuộn mượt mà giúp phân loại bài viết theo các chủ đề công nghệ hot (Next.js, React, Tailwind CSS, Fullstack...).
   - **Lưới bài viết Responsive**: Bố cục 1 cột trên điện thoại, 2 cột trên máy tính bảng và 3 cột trên máy tính bàn.
   - Thẻ bài viết (**[`BlogCard.js`](app/components/BlogCard.js)** & **[`Badge.js`](app/components/Badge.js)**) có banner gradient đa sắc sinh động, huy hiệu danh mục theo màu, thời gian đọc ước tính và hiệu ứng hover 3D nâng thẻ.

3. **Trang Chi Tiết Bài Viết ([`app/blog/[id]/page.js`](app/blog/[id]/page.js)):**
   - Sử dụng **Dynamic Route** (`/blog/[id]`) và cơ chế Server-Side Rendering (SSR).
   - Tải dữ liệu song song (Parallel Fetching) giữa chi tiết bài viết và danh sách bình luận thực tế từ **JSONPlaceholder API**.
   - Điều hướng thông minh: Thanh Breadcrumbs và nút quay lại danh sách bài viết.
   - Trình bày bài viết chuyên nghiệp: Đoạn mở đầu nổi bật, khung trích dẫn quan trọng (Pull Quote), danh sách thẻ tag liên quan, và hộp thông tin tác giả (Author Bio).
   - Hỗ trợ chuyển tiếp nhanh giữa các bài viết trước và sau (Pagination).
   - Tối ưu SEO với **Dynamic Metadata** (`generateMetadata`) tự động cập nhật tiêu đề tab trình duyệt theo tên bài viết.

4. **Footer ([`Footer.js`](app/components/Footer.js)):**
   - Giao diện nền Dark Slate sang trọng, bố cục đa cột hiển thị giới thiệu, liên kết nhanh, công nghệ sử dụng và form đăng ký nhận bản tin (_Newsletter_).
   - Được gắn vào Root Layout ([`layout.js`](app/layout.js)) với cơ chế Flexbox đảm bảo chân trang luôn ở đáy màn hình.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** [Next.js 16.3.5](https://nextjs.org/) (App Router, Turbopack)
- **Thư viện UI:** [React 19.2.8](https://react.dev/)
- **CSS & Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Source:** [JSONPlaceholder REST API](https://jsonplaceholder.typicode.com/)
- **Typography & Font:** `next/font/google` (Geist Sans & Geist Mono)

---

## 📂 Cấu Trúc Thư Mục

```text
lab_web_prac1/
├── app/
│   ├── blog/
│   │   └── [id]/
│   │       └── page.js       # Trang chi tiết bài viết (Dynamic Route)
│   ├── components/
│   │   ├── Badge.js          # Component huy hiệu nhãn danh mục
│   │   ├── BlogCard.js       # Component thẻ bài viết trang chủ
│   │   ├── Footer.js         # Component chân trang
│   │   └── Header.js         # Component thanh điều hướng đầu trang
│   ├── favicon.ico           # Icon ứng dụng
│   ├── globals.css           # Cấu hình CSS toàn cục với Tailwind CSS v4
│   ├── layout.js             # Root Layout (tích hợp Header & Footer)
│   └── page.js               # Trang chủ hiển thị danh sách bài viết
├── package.json              # Thông tin dự án và dependencies
└── README.md                 # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng Dẫn Tải Và Chạy Dự Án

### 1. Yêu cầu môi trường

- Đã cài đặt **Node.js** (khuyến nghị phiên bản 18.x, 20.x hoặc mới hơn).
- Đã cài đặt **Git**.

### 2. Tải mã nguồn về máy

Mở Terminal hoặc Command Prompt, chạy lệnh clone sau:

```bash
git clone https://github.com/game-dev-newbie/N23DCPT011_BuiThanhDat_Web_Prac1.git
```

Di chuyển vào thư mục dự án:

```bash
cd N23DCPT011_BuiThanhDat_Web_Prac1
# Hoặc tên thư mục tương ứng trên máy của bạn
```

### 3. Cài đặt các gói phụ thuộc (Dependencies)

```bash
npm install
```

### 4. Khởi động môi trường phát triển (Development Server)

```bash
npm run dev
```

Sau khi terminal báo máy chủ khởi động thành công, mở trình duyệt web và truy cập địa chỉ:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📋 Các Lệnh Hữu Ích Khác

- **Kiểm tra cú pháp và quy chuẩn mã nguồn:**
  ```bash
  npm run lint
  ```
- **Xây dựng phiên bản Production:**
  ```bash
  npm run build
  ```
- **Khởi chạy ứng dụng với bản build Production:**
  ```bash
  npm run start
  ```
