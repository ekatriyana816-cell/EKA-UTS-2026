from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, Project, FinalProjectReport, ContactMessage, User
from config import Config
import os
from datetime import datetime

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Create tables
with app.app_context():
    db.create_all()

# API Routes
@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{
        'id': p.id,
        'title': p.title,
        'short_description': p.short_description,
        'description': p.description,
        'image_url': p.image_url,
        'status': p.status
    } for p in projects])

@app.route('/api/final-report', methods=['GET'])
def get_final_report():
    report = FinalProjectReport.query.first()
    if report:
        return jsonify({
            'id': report.id,
            'title': report.title,
            'short_description': report.short_description,
            'problem_analysis': report.problem_analysis,
            'system_requirements': report.system_requirements,
            'solution_offered': report.solution_offered,
            'tech_stack': report.tech_stack,
            'architecture': report.architecture,
            'erd_diagram': report.erd_diagram,
            'flowchart_diagram': report.flowchart_diagram,
            'progress_percentage': report.progress_percentage,
            'current_phase': report.current_phase,
            'status': report.status,
            'pdf_report_url': report.pdf_report_url
        })
    return jsonify({'error': 'Report not found'}), 404

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json
    message = ContactMessage(
        name=data.get('name'),
        email=data.get('email'),
        subject=data.get('subject'),
        message=data.get('message')
    )
    db.session.add(message)
    db.session.commit()
    return jsonify({'message': 'Message sent successfully'}), 201

@app.route('/api/admin/report', methods=['PUT'])
@login_required
def update_report():
    if not current_user.is_admin:
        return jsonify({'error': 'Unauthorized'}), 403
    
    report = FinalProjectReport.query.first()
    data = request.json
    
    if 'progress_percentage' in data:
        report.progress_percentage = data['progress_percentage']
    if 'current_phase' in data:
        report.current_phase = data['current_phase']
    if 'status' in data:
        report.status = data['status']
    
    report.updated_at = datetime.utcnow()
    db.session.commit()
    return jsonify({'message': 'Report updated successfully'})

@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.json
    user = User.query.filter_by(username=data.get('username')).first()
    
    if user and check_password_hash(user.password_hash, data.get('password')):
        login_user(user)
        return jsonify({'message': 'Login successful', 'is_admin': user.is_admin})
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/admin/logout', methods=['POST'])
@login_required
def admin_logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'})

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)