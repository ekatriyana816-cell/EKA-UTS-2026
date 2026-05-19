-- Create admin user (password: admin123)
-- Password hash untuk 'admin123'
INSERT INTO users (username, email, password_hash, is_admin) 
VALUES ('admin', 'admin@portfolio.com', 'pbkdf2:sha256:260000$1234567890abcdef$5e8c9f2a3b1d4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f', 1)
ON DUPLICATE KEY UPDATE id=id;

-- Insert sample projects
INSERT INTO projects (title, short_description, description, status) VALUES
('E-Commerce Platform', 'Platform e-commerce modern dengan payment gateway', 'Full-featured e-commerce platform dengan fitur cart, checkout, dan payment integration', 'completed'),
('Task Management App', 'Aplikasi manajemen tugas kolaboratif', 'Real-time task management dengan team collaboration features', 'ongoing'),
('Portfolio Website', 'Website portofolio profesional', 'Personal portfolio website dengan dynamic content management', 'completed');

-- Insert sample project report
INSERT INTO final_project_reports (
    title, short_description, problem_analysis, system_requirements, 
    solution_offered, tech_stack, architecture, progress_percentage, current_phase, status
) VALUES (
    'Sistem Manajemen Inventaris Berbasis Web',
    'Solusi manajemen inventaris modern untuk UMKM dengan fitur real-time tracking',
    'Banyak UMKM di Indonesia masih menggunakan sistem manual (Excel/catatan) yang memiliki berbagai kelemahan:

1. **Akurasi Data Rendah**: Kesalahan input data sering terjadi
2. **Waktu Respon Lambat**: Pencarian data inventaris memakan waktu lama
3. **Tidak Ada Notifikasi**: Tidak ada peringatan untuk stok minimum
4. **Laporan Tidak Real-time**: Laporan inventaris harus dibuat manual
5. **Tidak Terintegrasi**: Tidak terhubung dengan sistem pembelian dan penjualan
6. **Multi-user**: Tidak bisa diakses multiple user secara bersamaan

Berdasarkan survei terhadap 50 UMKM di Jakarta, 85% mengalami kerugian akibat kesalahan manajemen stok.',
    'Berdasarkan analisis masalah, sistem harus memiliki:

**Fungsional Requirements:**
1. Manajemen Produk (CRUD operations)
2. Tracking stok real-time dengan auto update
3. Sistem kategori dan sub-kategori
4. Generate barcode/QR code untuk setiap produk
5. Laporan otomatis (Excel, PDF, CSV)
6. Notifikasi stok minimum via email dan dashboard
7. Multi-user dengan role-based access (Admin, Manager, Staff)
8. Dashboard analitik dengan grafik interaktif
9. History transaksi lengkap
10. Import/export data via Excel

**Non-fungsional Requirements:**
1. Response time < 2 detik
2. Support minimal 100 user concurrent
3. Uptime 99.9%
4. Data backup otomatis setiap hari',
    '**Sistem Manajemen Inventaris Pro** adalah solusi komprehensif yang menawarkan:

**Fitur Utama:**
1. **Dashboard Real-time**: Visualisasi data inventaris dengan Chart.js
2. **Smart Search**: Pencarian produk dengan filter multi-kriteria
3. **Barcode System**: Generate dan scan barcode untuk efisiensi operasional
4. **Auto Reorder**: Sistem rekomendasi pembelian berdasarkan stok minimum
5. **Mobile Responsive**: Dapat diakses dari berbagai device
6. **Export Multi-format**: Laporan dalam Excel, PDF, dan CSV
7. **Audit Trail**: Mencatat semua perubahan data inventaris
8. **Cloud Backup**: Backup otomatis ke cloud storage

**Keunggulan Kompetitif:**
- Harga terjangkau untuk UMKM (mulai Rp 500.000/bulan)
- Implementasi cepat (2-3 hari)
- Customer support 24/7
- Update fitur berkala gratis',
    '**Backend Technologies:**
• Framework: Flask 2.3 (Python)
• Database: MySQL 8.0
• ORM: SQLAlchemy
• Authentication: Flask-Login + JWT
• API: RESTful
• Task Queue: Celery + Redis
• Caching: Redis

**Frontend Technologies:**
• HTML5, CSS3, Bootstrap 5
• JavaScript (ES6+)
• Chart.js untuk visualisasi
• jQuery untuk AJAX
• QR Code.js untuk barcode

**DevOps & Tools:**
• Docker & Docker Compose
• Git & GitHub
• Nginx (Web Server)
• Gunicorn (WSGI)
• GitHub Actions (CI/CD)

**Libraries:**
• ReportLab (PDF generation)
• Pandas (Data processing)
• OpenPyXL (Excel handling)
• Flask-Mail (Email notifications)',
    '**Arsitektur MVC (Model-View-Controller):**
