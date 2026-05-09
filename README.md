# MongoDB ObjectId

## Overview
In MongoDB, an **ObjectId** is the default unique identifier for documents.  
It is a 12‑byte BSON value that ensures global uniqueness and encodes creation time.

---

## Structure of ObjectId
An ObjectId consists of 12 bytes (24 hex characters):

- **4 bytes** → Unix timestamp (document creation time)
- **5 bytes** → Random value (machine + process identifier)
- **3 bytes** → Incrementing counter (ensures uniqueness within the same second)

- ---

## Why Use ObjectId
- **Uniqueness**: Guarantees each document has a unique `_id`.
- **Time ordering**: Encodes creation time, so ObjectIds are naturally sorted.
- **Efficiency**: Compact (12 bytes vs. longer UUIDs).
- **Distributed safety**: Works across multiple servers without coordination.

---

## Common Operations
```js
// Generate new ObjectId
new ObjectId()

// Convert to string
new ObjectId().toString()

// Get timestamp
new ObjectId().getTimestamp()

// Query by ObjectId
db.users.findOne({ _id: new ObjectId("507f1f77bcf86cd799439011") })
