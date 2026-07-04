#ifndef ROUTER_H
#define ROUTER_H

#include <winsock2.h>

void route_client_request(SOCKET clientSock, char* requestBuffer);

#endif