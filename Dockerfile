FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Lightweight production image
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy các file cần thiết từ giai đoạn build
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

# Cài đặt production dependencies bằng yarn
RUN yarn install --production

# Mở cổng mặc định (nếu cần)
EXPOSE 3001

CMD ["node", "dist/main"]