from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import json
from supabase import create_client, Client

# Supabase credentials (replace with your actual info)
SUPABASE_URL = 'https://flpejsvwzielijtbtvde.supabase.co'
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZscGVqc3Z3emllbGlqdGJ0dmRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzk0NzEyMywiZXhwIjoyMDY5NTIzMTIzfQ.WpXpf2Opj5u2VNuAawq_tbnRxCdvL0_YGT3gHyW1Ab0"

# Create Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

class RequestHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        # Allow CORS
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path == "/submit":
            # Read form data
            content_length = int(self.headers["Content-Length"])
            post_data = self.rfile.read(content_length).decode("utf-8")
            parsed = parse_qs(post_data)

            name = parsed.get("name", [""])[0]
            email = parsed.get("email", [""])[0]
            message = parsed.get("message", [""])[0]

            # Insert into Supabase table
            supabase.table("contacts").insert({
                "name": name,
                "email": email,
                "message": message
            }).execute()

            # Respond to browser
            self.send_response(200)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "saved"}).encode())

if __name__ == "__main__":
    print("Server running at http://localhost:5000")
    server = HTTPServer(("localhost", 5000), RequestHandler)
    server.serve_forever()

