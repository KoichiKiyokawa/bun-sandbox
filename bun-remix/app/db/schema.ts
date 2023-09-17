import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersSchema = sqliteTable("users", {
  id: text("id").primaryKey().$defaultFn(crypto.randomUUID),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`DATETIME('now')`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`DATETIME('now')`),
});

export const todosSchema = sqliteTable("todos", {
  id: text("id").primaryKey().$defaultFn(crypto.randomUUID),
  text: text("text").notNull(),
  completed: integer("completed", { mode: "boolean" }).notNull(),
});
