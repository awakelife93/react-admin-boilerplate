import { deleteAPI } from "..";

export const deleteUser = async ({
  userId,
}: {
  userId: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeUser", { userId });
  } catch (e) {
    console.log("===============> deleteUser Error", e);
    throw e;
  }
};

export const deleteContents = async ({
  contId,
}: {
  contId: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeContents", { contId });
  } catch (e) {
    console.log("===============> deleteContents Error", e);
    throw e;
  }
};
