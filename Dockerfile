# Définition de l'image de base à savoir Debian

FROM debian:latest

# Mettre à jour les paquets et installer curl, sudo et git puis installer nodejs nécessaire pour l'utilisation de script en javascript

RUN apt update && \
    apt install -y curl sudo git && \
    curl -sL https://deb.nodesource.com/setup_14.x | sudo bash - && \
    apt install -y nodejs

# Copiez tous les fichiers nécessaires dans l'image Docker
COPY . /app

# Définissez le répertoire de travail
WORKDIR /app

# Installez les dépendances de votre application
RUN npm install

# Exposez le port sur lequel votre application écoute
EXPOSE 80

# Démarrez votre application avec la commande npm start
CMD ["node", "index.js"]