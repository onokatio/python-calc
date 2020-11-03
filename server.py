import http.server
import socketserver

Handler = http.server.CGIHTTPRequestHandler
with socketserver.TCPServer(("test", 8112), Handler) as http:
    http.serve_forever()
