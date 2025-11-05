FROM node:23-alpine AS builder
WORKDIR /client-build

# Install build dependencies for native modules (sharp, usb, etc.)
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    eudev-dev \
    libusb-dev \
    linux-headers \
    eudev-libs \
    vips-dev \
    pkgconfig \
    cargo

COPY package*.json ./
RUN npm install -g npm@latest
RUN npm ci
COPY . .
ARG API_URI
ARG SERVERSIDE_API_URI
ARG APP_NAME
ARG APP_URI
RUN chmod +x ./env.sh && ./env.sh
RUN npm run build

FROM node:23-alpine AS runner
WORKDIR /client
ENV NODE_ENV=production

# Runtime dependencies for native modules
RUN apk add --no-cache \
    python3 \
    libusb \
    eudev \
    eudev-libs \
    vips

COPY package*.json ./
RUN npm install -g npm@latest && npm ci --omit=dev

COPY --from=builder /client-build/server-wrapper.js /client/
COPY --from=builder /client-build/public /client/public
COPY --from=builder /client-build/.next/standalone /client/
COPY --from=builder /client-build/.next/static /client/.next/static

EXPOSE 1109
ENV PORT=1109
ENTRYPOINT ["node", "server-wrapper.js"]
