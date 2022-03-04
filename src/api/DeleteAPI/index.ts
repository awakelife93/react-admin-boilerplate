import { deleteAPI } from "..";

export const removeUser = async ({
  userId,
}: {
  userId: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeUser", { userId });
  } catch (error: unknown) {
    console.log("===============> removeUser Error", error);
    throw error;
  }
};

export const removeContents = async ({
  contentId,
}: {
  contentId: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeContents", { contentId });
  } catch (error: unknown) {
    console.log("===============> removeContents Error", error);
    throw error;
  }
};

export const removeComponent = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeComponent", { _id });
  } catch (error: unknown) {
    console.log("===============> removeComponent Error", error);
    throw error;
  }
};

export const removeLayout = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeLayout", { _id });
  } catch (error: unknown) {
    console.log("===============> removeLayout Error", error);
    throw error;
  }
};

export const removeStyle = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeStyle", { _id });
  } catch (error: unknown) {
    console.log("===============> removeStyle Error", error);
    throw error;
  }
};

export const removeTheme = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeTheme", { _id });
  } catch (error: unknown) {
    console.log("===============> removeTheme Error", error);
    throw error;
  }
};
