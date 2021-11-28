# BUILD REACT
FROM node:16 as react-build

WORKDIR /app
COPY . ./

RUN cp src/pages/Dashboard/data/menuReferentialExample.ts src/pages/Dashboard/data/menuReferential.ts
RUN yarn install --production
RUN yarn build

# stage: 2 — the production environment
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]