"use server";

import { db } from "@/db";

export const createBook = async (formData: FormData) => {
  try {
    await db.book.create({
      data: {
        user: {
          connect: {
            id: "1",
          },
        },
        title: formData.get("title") as string,
        category: {
          connect: {
            id: formData.get("category") as string,
          },
        },
      }
    })

    return { success: true, error: null };
  } catch (error) {
    console.error(error);
    return { success: false, error: error as Error };
  }
}