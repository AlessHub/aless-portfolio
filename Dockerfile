FROM node:18.12.1
# RUN apt-get update
# RUN apt-get install -y python2
COPY . .
CMD ["npm", "start"]