# APISIX - Keycloak - OpenID Connect Example

## Overview

This Proof of Concept (POC) demonstrates the integration of APISIX as the API gateway with Keycloak for request authentication. It includes a Next.js web server that showcases request headers and cookies. Additionally, a HTTPBin mock server is used to inspect requests made by the web client.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your machine.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/allanmaral/apisix-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd apisix-example
   ```

3. Build and run the project:

   ```bash
   docker-compose up
   ```

4. Access the web application:
   Open your browser and visit [http://localhost:9080](http://localhost:9080)

5. Login credentials:
   - Username: `john`
   - Password: `doe`

## Components

### APISIX

- API Gateway: APISIX is configured as the API gateway. Standalone configuration files are located in `apisix/conf`.

### Keycloak

- Authentication Provider: Keycloak is set up with a Realm named `apisix` and a client named `apisix`. Configuration files are in `keycloak/conf`.

### Web Server (Next.js)

- Simple Next.js web server demonstrating request headers and cookies.
- Source code in the `web` folder.

### HTTPBin Mock Server

- Mock server using HTTPBin to inspect requests made by the web client.
