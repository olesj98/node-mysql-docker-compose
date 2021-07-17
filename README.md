# Paxful test task 



## Run with docker compose

Run with:
```text
docker compose up
```

## Endpoints

```text
  - GET /products - to get all products 
    query - page: number

  - POST /orders/buy - to buy products
    body - {
      "productId": 1,
      "amount": 2,
      "totalPrice": 246
    }

  - POST /orders/sell - to sell products
    body - {
      "productId": 1,
      "amount": 2,
      "totalPrice": 246
    }
```
