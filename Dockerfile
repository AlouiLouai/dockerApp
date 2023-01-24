FROM node:16

WORKDIR /src

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "app/index.js"]