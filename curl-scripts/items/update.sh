#!/bin/bash

curl "http://localhost:4741/items/${ID}"\
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "item": {
    "name": "'"${NAME}"'",
    "quantity": "'"${QUANTITY}"'",
    "price": "'"${PRICE}"'"
    }
  }'

echo
