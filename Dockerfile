# --- Stage 1: Build dependencies ---
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (to leverage Docker cache efficiently)
COPY package*.json ./

# Force clean dependency install (no audit, no cache issues)
RUN npm ci --omit=dev --no-audit --prefer-online

# Copy application source code
COPY . .

# --- Stage 2: Create minimal runtime image ---
FROM node:20-alpine

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set work directory
WORKDIR /app

# Copy production files only from builder stage
COPY --from=builder /app ./

# Ensure proper ownership and permissions
RUN chown -R appuser:appgroup /app

# Use non-root user
USER appuser

# Environment configuration
ENV NODE_ENV=production

# Expose application port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
