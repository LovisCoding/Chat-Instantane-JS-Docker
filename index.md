**Nom :** Lecomte Arthur - Cnaepelnickx Evan - Bertaux Titouan - Hay Baptiste

**Groupe :** 18

**Année :** 2023

**IUT Le Havre - SAE 2.03**

### Compte rendu du projet réseau 


Nous avons créé un Chat en ligne permettant de discuter avec d'autres utilisateurs.

Pour cela, nous avons utilisé plusieurs langages de programmation pour y arriver dont NodeJS, HTML 5 et CSS 3. Certain de ces langages nous ont forcés à faire des recherches personnelles pour apprendre à le comprendre et l'utiliser.

Pour commencer, nous nous sommes divisés en 2 groupes de deux personnes pour travailler efficacement, en effet Arthur et Titouan ont principalement fait des recherches et ont appris à coder en NodeJS tandis qu'Evan et Baptiste ont travaillé sur le développement du site web (HTML et CSS).

Les fonctionnalités principales auxquelles nous avons pensés pendant notre projet sont :
- un login pour s'identifier à l'entrée du site
- un système de chat avec un message notifiant les personnes se connectant
- une partie de la page listant les personnes connectées, cependant à cause de la restriction de temps, nous n'avons pas pu lister ceux-ci
- Un règlement afin d'assurer le vivre ensemble sur le chat.
- Des sanctions en cas de non-respect du règlement




**Instructions pour lancer notre application**

- Nous vérifions que docker est installé :
```shell
docker --version
```

- Nous clonons le référentiel :
 ```shell
git clone git@github.com:LovisTheG/docker-sae203.git
```

- Ensuite nous utilisons la commande 'cd' pour aller au référentiel :
```shell
cd docker-sae203
```

- SI la branche de travail n'est pas la bonne, nous changeons de branche de travail :
```shell
git checkout gh-pages
```

- Nous construisons l'image décrite dans dockerfile avec docker build : 
```shell
docker build -t <nom-de-l'image> .
```

- Après ceci, nous lançons le serveur web :
```shell
docker run -d -p 8080:8080 <nom-de-l'image>
```

- On vérifie que l'application est en cours d'exécution. Pour ce faire, ouvrez un navigateur et tapez 
```
localhost:8080
```

- Nous vérifions que le conteneur associé est actif :
```shell
docker ps
```

- La sortie de ```docker ps``` doit être similaire à :
```shell
CONTAINER ID   IMAGE     COMMAND                     CREATED          STATUS          PORTS                                             NAMES
712013aaacbc   dchat     node index.js               33 seconds ago   Up 32 seconds   0.0.0.0:8080-&gt;8080/tcp, :::8080-&gt;8080/tcp   hungry_bohr
```

- Pour finir, nous arrêtons le conteneur avec la commande suivante (les derniers chiffres sont le code de hachage affiché par docker ps):
```shell
docker stop 712013aaacbc
```

- Si nous souhaitons supprimer le conteneur, on peut taper :
```shell
docker rm b8f8f406b03c
```
