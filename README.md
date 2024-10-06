Repo đang được hoàn thiện với các ví dụ đi kèm.

# Quy trình xây dựng framework
## 1. Chọn framework automation test.
Chọn dựa trên các tiêu chí:
- Server hệ thống support
- Framework (fw) đủ nhanh, learning curve vừa phải cho cả team có thể follow được.
- Cộng đồng support cho framework active.
- Có chuyên gia (có thể là dev/ QA) khá giỏi trong ngôn ngữ mà bạn chọn.
## 2. Xây dựng fw
- Cử 1-2 bạn xây dựng base project, viết các base page, utils functions để giúp việc code nhanh hơn. Tránh việc làm đi làm lại cùng một việc
- Xây dựng hệ thống conventions, document các workflows lại.

## 3. Tiến hành chạy thử trên quy mô nhỏ, sửa đổi fw sao cho cảm thấy khá ưng ý

# Cấu trúc thư mục gợi ý
```bash
├── README.md
├── constants
├── fixtures
├── node_modules
├── package-lock.json
├── package.json
├── playwright.config.ts
├── pom
├── tests
├── tests-examples
└── utils
```
Trong đó:
- `README.md`: file tài liệu, chứa cách cài đặt, các conventions, lưu ý và các lỗi thường gặp.
- `constants`: folder chứa các hằng số thường dùng cho toàn bộ dự án.
- `playwright.config.ts`: file config theo môi trường
- `pom`: folder chứa các page object model
- `utils`: folder chứa các hàm utils dùng cho dự án.
- `fixtures`: folder chứa các fixture viết sẵn cho dự án.
- `.gitignore`: file chứa các ignore file