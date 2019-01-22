Sample case for sequelize issue regarding the user of `underscored` on a model's init options.

## How to run

```
npm i
npm run
```

## Expected behavior

When defining a model, the `underscored` option will translate model attributes in camelCase to snake_case. Using postgres 10.4.

```javascript
const User = sequelize.define('user', {
  userName: Sequelize.STRING,
  birthDay: Sequelize.DATE
}, { underscored: true });

sequelize.sync();
```

```sql
-- The underlying table should look like this:

  Column    |           Type
======================================
 id         | integer
 user_name  | character varying(255)
 birth_day  | timestamp with time zone
 created_at | timestamp with time zone
 updated_at | timestamp with time zone

```

## Actual behavior
```sql
-- The underlying actually looks like this

  Column    |           Type
======================================
 id         | integer
 userName   | character varying(255)
 birthDay   | timestamp with time zone
 created_at | timestamp with time zone
 updated_at | timestamp with time zone

```