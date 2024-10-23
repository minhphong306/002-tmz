# Cấu trúc thư mục
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

# Các test report quan tâm
- Thời gian load trang: 
- Sản phẩm có bị outofstock không?
- Thông tin sản phẩm có đủ không?
- Có add to cart được không?