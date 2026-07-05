#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "router.h"

#define BUFFER_SIZE 1024

// --- HelpFunction ---
void sendHTML(SOCKET sock, const char* file) {
    FILE* htmlFile = fopen(file, "r");
    if (!htmlFile) {
        perror("Could not open HTML file");
        return;
    }
    char buffer[BUFFER_SIZE] = { 0 };
    size_t read = 0;
    char* header = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nAccess-Control-Allow-Origin: *\r\n\r\n";
    send(sock, header, strlen(header), 0);

    while ((read = fread(buffer, 1, BUFFER_SIZE, htmlFile)) > 0) {
        send(sock, buffer, read, 0);
    }
    fclose(htmlFile);
}

// --- JsonFunction
void sendJson(SOCKET sock, const char* jsonMessage) {
    const char* header =
    "HTTP/1.1 200 OK\r\n"
        "Content-Type: application/json\r\n" // <-- JSON
        "Access-Control-Allow-Origin: *\r\n"
        "\r\n";

    send(sock, header, strlen(header), 0);
    send(sock, jsonMessage, strlen(jsonMessage), 0);
}

// --- Request Parser ---
char* parseRequest(char* request) {
    char* method = strtok(request, " ");
    char* path = strtok(NULL, " ");
    return path; 
}
// --- Message Sender ---
void sendMessage(SOCKET sock, const char* message) {
	// Define the HTTP response header
    const char* header =
        "HTTP/1.1 200 OK\r\n"
        "Content-Type: text/plain\r\n"
        "Access-Control-Allow-Origin: *\r\n"
        "\r\n";

	// Send the header and message to the client
    send(sock, header, strlen(header), 0);
    send(sock, message, strlen(message), 0);
}

// --- Route Handler ---

void handleIndex(SOCKET clientSock) {
    sendHTML(clientSock, "C-Backend.html");
}

void handleAbout(SOCKET clientSock) {
    sendHTML(clientSock, "C:/Users/cmaul/Desktop/about.html");
}

void handleHealth(SOCKET clientSock) {
    char* healthMessage = "{\"status\": \"Server is healthy!\"}";
    sendMessage(clientSock, healthMessage);

}

void handleNotFound(SOCKET clientSock) {
    char* error404 = "HTTP/1.1 404 Not Found\r\nContent-Type: text/html\r\n\r\n<h1>404 Not Found</h1>";
    send(clientSock, error404, strlen(error404), 0);
    printf("Sent 404 Error\n");
}

// --- Routing Tabelle ---

typedef void (*RouteHandler)(SOCKET);

typedef struct {
    const char* path;
    RouteHandler handler;
} Route;

Route routes[] = {
    {"/", handleIndex},
    {"/about", handleAbout},
    {"/api/v1/health", handleHealth},
};

int numRoutes = sizeof(routes) / sizeof(Route);


// 
void route_client_request(SOCKET clientSock, char* requestBuffer) {
    char* path = parseRequest(requestBuffer);

    if (path != NULL) {
        for (int i = 0; i < numRoutes; i++) {
            if (strcmp(path, routes[i].path) == 0) {
                routes[i].handler(clientSock); 
                return;
            }
        }
		
        handleNotFound(clientSock);
    }
}