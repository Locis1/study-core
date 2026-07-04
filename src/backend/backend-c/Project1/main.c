#include <stdio.h>
#include <stdlib.h>
#include <winsock2.h>
#include <ws2tcpip.h>

// Binde deinen eigenen Router ein
#include "router.h"

#define PORT 9090

int main() {
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        exit(1);
    }

    SOCKET serverSock = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY;
    serverAddr.sin_port = htons(PORT);

    bind(serverSock, (struct sockaddr*)&serverAddr, sizeof(serverAddr));
    listen(serverSock, 5);

    printf("Server is listening on port %d\n", PORT);

    while (1) {
		// Accept incoming connections
        struct sockaddr_in clientAddr;
        int clientAddrLen = sizeof(clientAddr);
        SOCKET clientSock = accept(serverSock, (struct sockaddr*)&clientAddr, &clientAddrLen);

        if (clientSock == INVALID_SOCKET) continue;

        printf("Accepted connection\n");

        char requestBuffer[1024] = { 0 };
        int recvValue = recv(clientSock, requestBuffer, sizeof(requestBuffer), 0);

        if (recvValue > 0) {
			// Route the request to the appropriate handler
            route_client_request(clientSock, requestBuffer);
        }

        closesocket(clientSock);
        printf("Closed connection\n");
    }

    closesocket(serverSock);
    WSACleanup();
    return 0;
}