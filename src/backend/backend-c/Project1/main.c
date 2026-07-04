#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define PORT 9090
#define BUFFER_SIZE 1024

// Include the necessary headers for Windows socket programming
#include <winsock2.h>
#include <ws2tcpip.h>


void sendHTML(SOCKET sock, const char* file) {

	// Open the HTML file for reading
	FILE* htmlFile = fopen(file, "r");

	// Check if the file was opened successfully
    if (!htmlFile) {
		perror("Could not open HTML file");
		return;
    }

	// Read the contents of the HTML file and send it to the client
    char buffer[BUFFER_SIZE] = {0};
    size_t read = 0;
	char* header = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n";
	send(sock, header, strlen(header), 0);


    while ((read = fread(buffer,1 ,BUFFER_SIZE, htmlFile)) > 0) {
        send(sock, buffer, read,0);
    }


	fclose(htmlFile);
}


int main() {

	// Initialize Winsock
        WSADATA wsaData;

		// Initialize Winsock
        if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
            fprintf(stderr, "WSAStartup failed.\n");
            exit(1);
        }

		// Check if Winsock version 2.2 is available
        if (LOBYTE(wsaData.wVersion) != 2 ||
            HIBYTE(wsaData.wVersion) != 2)
        {
            fprintf(stderr, "Version 2.2 of Winsock not available.\n");
            WSACleanup();
            exit(2);
        }

		// Create a socket
        SOCKET serverSock;
        if ((serverSock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
			perror("Could not get our server socket fd (File Descripter)");
			return -1;
        }

		// Bind the socket to an address and port
		struct sockaddr_in serverAddr;
		serverAddr.sin_family = AF_INET;
        serverAddr.sin_addr.s_addr = INADDR_ANY;
        serverAddr.sin_port = htons(PORT);

		// Bind the socket to the address and port
        if (bind(serverSock, (struct sockaddr*)&serverAddr,sizeof serverAddr ) < 0) {
			perror("Could not bind to server socket and adress");
            return -1;
        }
		// Listen for incoming connections
        if (listen(serverSock, 5) < 0) {
            perror("Could not on server socket and ip");
            return -1;
        }

		// Accept incoming connections
		printf("Server is listening on port %d\n", PORT);

		// Accept incoming connections in a loop
        while (1) {
			struct sockaddr_in clientAddr;
			int clientAddrLen = sizeof(clientAddr);
            SOCKET clientSock;

            clientSock = accept(serverSock, (struct sockaddr*)&clientAddr, &clientAddrLen);

            if (clientSock == INVALID_SOCKET) {
                perror("Could not accept incoming client");
                continue;
            }

            printf("Accepted connection\n");

			// Receive the HTTP request from the client
            char requestBuffer[1024] = { 0 };
            int recvValue = recv(clientSock, requestBuffer, sizeof(requestBuffer), 0);
			
            if (recv <= 0) {
				printf("Could not receive request from client\n");
            }

            printf("Received request:\n%s\n", requestBuffer);

            sendHTML(clientSock, "C:/Users/cmaul/Desktop/test.html");

			// Close the client socket
            closesocket(clientSock);
			printf("Closed connection\n");
        }

		closesocket(serverSock);

    WSACleanup();
    return 0;
}