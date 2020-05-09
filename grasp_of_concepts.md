#### find() & the Cursor Object.

La méthode `find()` renvoi un `cursor object`. Lorsque la requête est contient beaucoup de résultat. Le `cursor object` va renvoyer uniquement 20 résultats. Pour avoir l'ensemble des résultats en même temps on utilise les méthodes `toArray() | forEach()`

```shell
db.passanger.find().toArray()

db.passanger.find().forEach((passangerData) => { printjson(passangerData) }).pretty()
```
