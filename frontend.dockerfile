
FROM node:18-alpine

WORKDIR /app/

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
COPY .env /app/
COPY postconfig.css.js /app/
COPY tailwind.config.js /app/

RUN npm install

CMD ["npm", "start"]
