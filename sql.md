```sql
SELECT * FROM "promo" ORDER BY name ASC;
SELECT * FROM "student" ORDER BY last_name ASC;
SELECT * FROM "student" WHERE "promo_id" = 135;
SELECT * FROM "student" WHERE "first_name" ILIKE '%ina%' OR "last_name" ILIKE '%ina%';

INSERT INTO "student" (first_name, last_name, github_username, profile_picture_url, promo_id) VALUES ('Chuck','Norris','Chuck.Norris', 'https://cdn.fakercloud.com/avatars/petrangr_128.jpg', 5);
INSERT INTO "promo" (id, name, github_organization) VALUES (692, "César", null)
UPDATE "promo" SET name = 'Cleo' WHERE id = 5;
DELETE FROM "promo" WHERE "id" = 123;
```

<!-- (first_name, last_name, github_username, profile_picture_url, promo_id) -->
