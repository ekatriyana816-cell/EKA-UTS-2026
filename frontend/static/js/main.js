<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio - Web Developer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">MyPortfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#final-project">Final Project</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#adminModal">Admin</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="hero-section">
        <div class="container">
            <div class="row min-vh-100 align-items-center">
                <div class="col-lg-8 mx-auto text-center">
                    <h1 class="display-4 fw-bold">Ahmad Faisal</h1>
                    <h2 class="h3 mb-4">Full Stack Web Developer</h2>
                    <p class="lead mb-4">Membangun solusi digital yang inovatif dengan teknologi modern untuk membantu bisnis berkembang di era digital</p>
                    <div class="tech-stack mb-4">
                        <span class="badge bg-primary">Python</span>
                        <span class="badge bg-primary">Flask</span>
                        <span class="badge bg-primary">JavaScript</span>
                        <span class="badge bg-primary">React</span>
                        <span class="badge bg-primary">Docker</span>
                        <span class="badge bg-primary">MySQL</span>
                        <span class="badge bg-primary">Git</span>
                        <span class="badge bg-primary">REST API</span>
                    </div>
                    <a href="#contact" class="btn btn-primary btn-lg me-2">Hubungi Saya</a>
                    <a href="#projects" class="btn btn-outline-light btn-lg">Lihat Project</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Tentang Saya</h2>
            <div class="row">
                <div class="col-md-6">
                    <h3>Profil Profesional</h3>
                    <p>Saya adalah Full Stack Developer dengan pengalaman 3+ tahun dalam pengembangan web aplikasi. Berpengalaman dalam membangun aplikasi skalabel menggunakan Flask, React, dan teknologi cloud. Saya memiliki passion dalam menciptakan solusi digital yang efisien dan user-friendly.</p>
                    
                    <h4 class="mt-4">Keahlian Utama:</h4>
                    <ul>
                        <li><strong>Backend Development:</strong> Python, Flask, Django, RESTful API</li>
                        <li><strong>Frontend Development:</strong> HTML5, CSS3, JavaScript, React, Bootstrap</li>
                        <li><strong>Database:</strong> MySQL, PostgreSQL, MongoDB, SQLite</li>
                        <li><strong>DevOps:</strong> Docker, Git, CI/CD, Nginx, Gunicorn</li>
                        <li><strong>Tools:</strong> VS Code, Postman, Git, Jira</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h3>Pendidikan & Sertifikasi</h3>
                    <ul>
                        <li><strong>S1 Informatika</strong> - Universitas Indonesia (2020-2024)
                            <br><small>IPK: 3.85/4.00</small>
                        </li>
                        <li><strong>Full Stack Web Development Bootcamp</strong> - Dicoding (2023)</li>
                        <li><strong>Certified Docker Associate</strong> - Docker (2024)</li>
                        <li><strong>Python Programming Certification</strong> - Microsoft (2023)</li>
                    </ul>
                    
                    <h4 class="mt-4">Pengalaman Kerja:</h4>
                    <ul>
                        <li><strong>Freelance Web Developer</strong> (2022-sekarang)
                            <br><small>Membangun 15+ website untuk berbagai klien</small>
                        </li>
                        <li><strong>Backend Developer Intern</strong> - PT Tech Inovasi (2023)
                            <br><small>Mengembangkan REST API untuk aplikasi e-commerce</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Project Saya</h2>
            <div class="row" id="projects-container">
                <!-- Projects will be loaded here -->
                <div class="col-12 text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final Project Section -->
    <section id="final-project" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Laporan Awal Project Akhir</h2>
            <div id="final-project-content" class="row">
                <!-- Final project report will be loaded here -->
                <div class="col-12 text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Kontak Saya</h2>
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <form id="contact-form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama Lengkap</label>
                            <input type="text" class="form-control" id="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Alamat Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="subject" class="form-label">Subjek</label>
                            <input type="text" class="form-control" id="subject" required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Pesan</label>
                            <textarea class="form-control" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Kirim Pesan</button>
                    </form>
                    
                    <div class="mt-4 text-center">
                        <h5>Atau hubungi saya melalui:</h5>
                        <div class="mt-3">
                            <a href="#" class="btn btn-outline-primary me-2"><i class="fab fa-linkedin"></i> LinkedIn</a>
                            <a href="#" class="btn btn-outline-dark me-2"><i class="fab fa-github"></i> GitHub</a>
                            <a href="#" class="btn btn-outline-success"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Admin Modal -->
    <div class="modal fade" id="adminModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Admin Panel</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div id="admin-login-form">
                        <h6>Login Admin</h6>
                        <div class="mb-3">
                            <label for="admin-username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="admin-username" required>
                        </div>
                        <div class="mb-3">
                            <label for="admin-password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="admin-password" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100" onclick="adminLogin()">Login</button>
                    </div>
                    
                    <div id="admin-update-form" style="display:none;" class="mt-4">
                        <h6>Update Progress Project Akhir</h6>
                        <hr>
                        <div class="mb-3">
                            <label for="progress" class="form-label">Progress (%)</label>
                            <input type="range" class="form-range" id="progress" min="0" max="100" step="5">
                            <span id="progress-value" class="badge bg-primary mt-2">0%</span>
                        </div>
                        <div class="mb-3">
                            <label for="phase" class="form-label">Current Phase</label>
                            <input type="text" class="form-control" id="phase" placeholder="Contoh: Development Phase 4">
                        </div>
                        <div class="mb-3">
                            <label for="status" class="form-label">Status</label>
                            <select class="form-control" id="status">
                                <option value="planning">Planning</option>
                                <option value="developing">Developing</option>
                                <option value="testing">Testing</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <button class="btn btn-success w-100" onclick="updateProgress()">Update Progress</button>
                        <button class="btn btn-danger w-100 mt-2" onclick="adminLogout()">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p>&copy; 2024 Ahmad Faisal - Personal Portfolio. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>