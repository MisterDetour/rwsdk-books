"use server";

import { requestInfo } from "rwsdk/worker";
import { db } from "@/db";

export const updateRating = async (bookId: string, rating: number) => {
  try {
    await db.book.update({
      where: {
        id: bookId,
      },
      data: {
        rating: rating,
      }
    })

    return { success: true, error: null }
  } catch (error) {
    console.error(error)
    return { success: false, error: error as Error }
  }
}

export const updateStatus = async (bookId: string, status: string) => {
  let readDate = null;

  if(status === 'read') {
    readDate = new Date()
  }

  try {
    await db.book.update({
      where: {
        id: bookId,
      },
      data: {
        status: status,
        readDate: readDate
      }
    })

    return { success: true, error: null }
  } catch (error) {
    console.error(error)
    return { success: false, error: error as Error }
  }
}

export const deleteBook = async (bookId: string) => {
  try {
    await db.book.delete({
      where: {
        id: bookId,
      },
    });
    return { success: true, error: null }
  } catch (error) {
    console.error(error)
    return { success: false, error: error as Error }
  }
}

export const createBook = async (formData: FormData) => {
  try {
    const { ctx } = requestInfo;

    if (!ctx.user) {
      throw new Error("User not found");
    }

    await db.book.create({
      data: {
        user: {
          connect: {
            id: ctx.user.id,
          },
        },
        title: formData.get("title") as string,
        status: 'unread',
        category: {
          connect: {
            id: formData.get("category") as string,
          },
        },
        image: formData.get("image") as string
      }
    })

    return { success: true, error: null };
  } catch (error) {
    console.error(error);
    return { success: false, error: error as Error };
  }
}

export const createCategory = async (formData: FormData) => {
  try {
    const { ctx } = requestInfo;

    if (!ctx.user) {
      throw new Error("User not found");
    }

    await db.category.create({
      data: {
        user: {
          connect: {
            id: ctx.user.id,
          },
        },
        name: formData.get("name") as string,
      }
    })

    return { success: true, error: null };
  } catch (error) {
    console.error(error);
    return { success: false, error: error as Error };
  }
}