from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import threading

os.chdir('')

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()
    
    def log_message(self, format, *args):
        print(f"🌐 {self.address_string()} - {format % args}")

if __name__ == '__main__':
    PORT = 8000
    server = HTTPServer(('localhost', PORT), MyHTTPRequestHandler)
    print(f"🚀 Сервер запущен на http://localhost:{PORT}")
    print(f"📁 Папка: c:/Users/vladk/Desktop/server wiki")
    print(f"⚠️ Открой в браузере: ")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n❌ Сервер остановлен")
