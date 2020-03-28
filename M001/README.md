# M001

## Tools overview

### MongoDB Atlas

Interface de gestion d'une DB à travers le cloud et les différentes région du monde.

### MongoDB Compass

Interface graphique pour les utilisateurs qui permet l'exploration, l'analyse, le CRUD, l'indexation etc.. des données.

### Mongo Shell

JS interface qui permet de faire certaines opérations comme le CRUD dans le terminal


### Définitions et fonctionnement

<p align="center">
  <img width="460" height="300" src="https://docs.mongodb.com/manual/_images/sharded-cluster-production-architecture.bakedsvg.svg">
</p>

Atlas-Managed MongoDB ou "Cluster" peut être *replica set* ou *sharded cluster*.

Un "sharded cluster" standard comprend 10 serveurs. 3 serveurs pour la configuration, 2 *replica set* qui comprennent chacun 3 serveurs et 1 serveurs pour l'interface entre le client (Mongo Shell ou Mongo Compass) et le *sharded cluster*

> *replica set* : c'est un ensemble de 3 serveurs. 1 serveurs dit PRIMARY où l'on peut lire et écrire des données. 2 serveurs de sauvegarde. A chaque que fois que l'on écrit des datas dans le serveurs PRIMARY, ils sont automatiquement copiées sur les 2 serveurs de sauvegarde.
**Un *replica set* est donc un ensemble de 3 serveurs agencés de sorte que les données qui se trouvent sur un serveur soient automatiquemennt copiées sur les autres serveurs.**
