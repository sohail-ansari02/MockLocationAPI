```
start command: npm run dev
```

```
open http://localhost:3000
```

📌 API Documentation
1. Get all Indian states

Endpoint:
GET http://localhost:3000/states
{
  "STATES": [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    ...other states
  ],
  "count": 32
}


2. Get districts by state (case-insensitive)
Endpoint:
GET http://localhost:3000/districts/:stateName
Example:
GET http://localhost:3000/districts/Himachal%20Pradesh
Example Response:
{
  "state": "Himachal Pradesh",
  "districts": ["Shimla", "Mandi", "Kangra"]
}

