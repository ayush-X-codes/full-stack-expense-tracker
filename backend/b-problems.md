## Why make different table for Categories
Without a separate categories table:
```
Your transactions would look like this:
Transaction 1: Pizza, Food, $20
Transaction 2: Uber, Transport, $15
Transaction 3: Grocery, Food, $50
Transaction 4: Bus, Transport, $3
```
Problems:

- You type "Food" 100 times manually - typos happen! (Foood, food, FOOD)
- Want to change "Food" to "Groceries"? You have to update 100 - transactions one by one
- Want to add an icon or color to "Food"? Can't do it easily
- Database stores the word "Food" 100 times (wastes space)

With a categories table:
```
Categories table:
1. Food (green icon)
2. Transport (blue icon)
3. Shopping (red icon)
```
```
Transactions table just stores the number:
Transaction 1: Pizza, category_id: 1, $20
Transaction 2: Uber, category_id: 2, $15
Transaction 3: Grocery, category_id: 1, $50
```
Benefits:

- No typos - you pick from a dropdown
- Change "Food" to "Groceries"? Change it once in categories table, - all transactions update
- Add colors/icons? Store them in one place
- Saves space - stores number "1" instead of word "Food" repeatedly
```
Think of it like contacts in your phone - you save "Mom" once with her number, then reference her in all your texts. You don't type "Mom - 555-1234" every single time!
```

## Query:
```
SELECT 
    EXTRACT(MONTH FROM date) AS month,
    EXTRACT(YEAR FROM date) AS year
FROM transactions;
```

We will break this using 🌳 Semantic Tree Method

## 🌳 ROOT TRUTH (First Principle)

Time is stored as ONE complete value.

Example:
```
2026-02-16
```

This single value contains:
```
Year + Month + Day
```
But sometimes we don’t need the full date.

Sometimes we only need:

- Only month
- Only year
- Only day

So we need a way to separate parts of time.

That is why `EXTRACT()` exists.

## 🌳 LEVEL 1 — The Core Problem

Imagine your `transactions` table:
```
id | amount | date
-------------------------
1  | 500    | 2026-02-16
2  | 200    | 2026-02-10
3  | 800    | 2025-12-01
```
Now you want:
```
How much money in February 2026?
```

You cannot compare full date directly.

Because dates are different:
```
2026-02-16
2026-02-10
```

So you need only:
```
Month = 2
Year = 2026
```

That’s the problem.

## 🌳 LEVEL 2 — What EXTRACT Solves

`EXTRACT()` breaks one date into smaller parts.

Think of it like:
```
Date = Cake 🎂
EXTRACT = Knife 🔪
```

You cut the cake and take only the slice you want.

## 🌳 LEVEL 3 — How It Works

When you write:
```
EXTRACT(MONTH FROM date)
```
It means:
```
Take the MONTH part
from the date column
```

If date is:
```
2026-02-16
````
Result:
```
2
```

When you write:
```
EXTRACT(YEAR FROM date)
```

Result:
```
2026
```
## 🌳 LEVEL 4 — Why This Exists (Real Need)

Databases store full timestamp like:
```
2026-02-16 10:32:45
```

But real world questions are like:

- How many sales this month?
- How many users joined this year?
- Show 2025 report.

We think in:
```
Month
Year
Day
```

So database gives tools to separate them.

## 🌳 LEVEL 5 — Why Not Store Month Separately?

You might think:

Why not create 3 columns?
year | month | day


Because:

1. It increases redundancy.

2. You lose time precision.

3. Sorting becomes complex.

4. Date operations become harder.

So database stores one complete date.

And gives tools like `EXTRACT()` to break it when needed.

## 🌳 LEVEL 6 — Deeper Technical Truth

Internally:

PostgreSQL stores date as a numeric value (number of days since base date).

When you use:
```
EXTRACT(MONTH FROM date)
```

It calculates month from that internal value.

So EXTRACT() is like:
```
Translate raw time into human-readable parts.
```
## 🌳 COMPLETE SEMANTIC TREE
```
DATE
│
├── Stored as single time value
│
├── Real world questions need parts
│     ├── Year
│     ├── Month
│     └── Day
│
├── Problem:
│     └── Cannot group/filter by full date
│
├── Solution:
│     └── EXTRACT()
│
├── What it does:
│     └── Separates one time into components
│
└── Why it exists:
      └── To answer time-based questions
```
## 🌳 Real Example with Grouping
```
SELECT 
    EXTRACT(YEAR FROM date) AS year,
    EXTRACT(MONTH FROM date) AS month,
    SUM(amount) AS total
FROM transactions
GROUP BY year, month;
```

Now you can get:
```
2026 | 2 | 700
2025 | 12 | 800
```

That is impossible without extracting parts.

## 🧠 Fundamental Truth

Time is continuous.

Humans think in categories (year, month, day).

`EXTRACT()` converts continuous time into categorized time.