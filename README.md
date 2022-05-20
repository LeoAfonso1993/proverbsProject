# Prov31 project

Reading plan that sorts different Proverbs according to the date. This is part of a project to study the use of public APIs.



## API Reference

```
https://www.abibliadigital.com.br/api/verses/kjv/pv/${n}
```
#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### api_key

API requires a personal token token to process more than 20 requests in a short amount of time, in case you don't have one an error will pop up and you may need wait a few minutes before trying again.

-to request your personal token join their discord 
https://www.abibliadigital.com.br/en and follow their instructions on Postman.
## Authors

- [LeoAfonso1993](https://github.com/LeoAfonso1993)