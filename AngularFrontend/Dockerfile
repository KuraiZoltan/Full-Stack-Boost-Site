FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM trion/nginx-angular:latest
COPY --from=node /app/dist/angular-frontend /usr/share/nginx/html
