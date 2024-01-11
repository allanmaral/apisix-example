FROM quay.io/keycloak/keycloak:22.0.5 as builder
COPY ./conf/keycloak.json /opt/keycloak/data/import/keycloak.json
RUN /opt/keycloak/bin/kc.sh import --file /opt/keycloak/data/import/keycloak.json --override true

FROM quay.io/keycloak/keycloak:22.0.5
COPY --from=builder /opt/keycloak/ /opt/keycloak/
WORKDIR /opt/keycloak
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--http-port 9009"]
# ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--http-port 9009", "--hostname-url=http://mypi.local:9080/auth/", "--hostname-admin-url=http://mypi.local:9080/auth/", "--hostname-strict-backchannel=true"]