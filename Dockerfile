# Etapa de compilación
FROM node:14-alpine as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Copia los archivos compilados al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 del contenedor
EXPOSE 80

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
