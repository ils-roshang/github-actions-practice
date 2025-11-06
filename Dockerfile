# --- Stage 1: Build dependencies ---
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only package files first (better build cache)
COPY package*.json ./

# Install dependencies (production only)
RUN npm ci --only=production

# Copy the rest of the source code
COPY . .

# --- Stage 2: Run the application securely ---
FROM node:20-alpine

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app ./

# Set secure permissions
RUN chown -R appuser:appgroup /app

# Run as non-root user
USER appuser

# Expose app port
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
