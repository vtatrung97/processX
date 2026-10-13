# ==============================================================================
# DOCKERFILE CHO REMOTE MICRO-FRONTEND (PROCESSX)
# Độc lập - Tự build ra Image riêng và deploy trên Pod/Port riêng
# ==============================================================================

ARG REGISTRY=""

# ------------------------------------------------------------------------------
# Stage 1: Build ProcessX Remote Module
# ------------------------------------------------------------------------------
FROM ${REGISTRY}node:14.21.2-alpine3.16 AS builder

WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=2048"

# Cài đặt dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy toàn bộ mã nguồn ProcessX
COPY . .

# Build phiên bản môi trường chỉ định
ARG BUILD_ENV=production
RUN npm run build -- --configuration=${BUILD_ENV}

# ------------------------------------------------------------------------------
# Stage 2: Nginx Runtime phục vụ ProcessX (Mở CORS cho Module Federation)
# ------------------------------------------------------------------------------
FROM ${REGISTRY}nginx:1.23.3-alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy kết quả build vào thư mục web
COPY --from=builder /app/dist/processX/ /usr/share/nginx/html/

# Copy cấu hình Nginx riêng cho ProcessX (hỗ trợ CORS cho remoteEntry.js)
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
