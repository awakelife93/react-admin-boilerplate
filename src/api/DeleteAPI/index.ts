import { deleteAPI } from "..";

export const deleteUser = async ({ userId }: { userId: number }) => {
  try {
    let result: object = await deleteAPI("removeUser", { userId });
    return result;
  } catch (e) {
    console.log("===============> deleteUser Error", e);
    throw e;
  }
};
