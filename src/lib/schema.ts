import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

// Kullanıcılar Tablosu
export const users = pgTable('users', {
  id: text('id').primaryKey(), // Clerk ID'si ile eşleşecek
  username: varchar('username', { length: 256 }).unique(),
  email: varchar('email', { length: 256 }).unique().notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Gönderiler Tablosu
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(), // Clerk ID'si
  content: text('content').notNull(),
  imageUrl: text('image_url'), // Gönderiye ait opsiyonel görsel
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Beğeniler Tablosu (Örnek)
export const likes = pgTable('likes', {
    id: serial('id').primaryKey(),
    userId: text('user_id').references(() => users.id).notNull(),
    postId: serial('post_id').references(() => posts.id).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Yorumlar Tablosu (Örnek)
export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    userId: text('user_id').references(() => users.id).notNull(),
    postId: serial('post_id').references(() => posts.id).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
}); 