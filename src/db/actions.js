import { db } from ".";
import { postsTable } from './schema';
import { desc, eq } from "drizzle-orm";

// add a new row to the posts table
export const createPost = async (post) => {
    await db.insert(postsTable).values({
        content: post.content,
        title: post.title,
        author: post.author,
        author_id: post.author_id,
        slug: post.slug,
    });
};

// get all the posts
export const getAllPosts = async () => {
    return await db.select().from(postsTable).orderBy(desc(postsTable.created_at));
};

// get a post using its slug
export const getSinglePost = async (slug) => {
    return await db.query.postsTable.findFirst({
        where: (post, { eq }) => eq(post.slug, slug)
    });
};

// delete a post
export const deletePost = async (id) => {
    await db.delete(postsTable).where(eq(postsTable.id, id));
};

// update a post's content
export const updatePost = async (content, id) => {
    await db.update(postsTable)
        .set({ content: content })
        .where(eq(postsTable.id, id));
};