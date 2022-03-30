#กำหนด image เป็น Linux ที่ทำงานอยู่บน Version Apline
FROM node:lts
RUN apt-get update && apt-get install -y \
  nano \
  vim
#เปลี่ยน dir ไว้ที่ usr app
WORKDIR /usr/app

#Entry Point

COPY ./package.json ./
#copy file [เริ่มต้น] => [สิ้นสุด] เอาไฟล์ทั้งหมดไป
RUN npm install
COPY ./ ./
CMD ["npm", "start"]
