import { deleteAPI } from "..";

export const deleteUser = async ({
  userId,
}: {
  userId: number;
}): Promise<object> => {
  try {
    let result: object = await deleteAPI("removeUser", { userId });
    return result;
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
    let result: object = await deleteAPI("removeContents", { contId });
    return result;
  } catch (e) {
    console.log("===============> deleteContents Error", e);
    throw e;
  }
};
