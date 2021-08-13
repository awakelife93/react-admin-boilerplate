import { deleteAPI } from "..";

export const removeUser = async ({
  userId,
}: {
  userId: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeUser", { userId });
  } catch (e) {
    console.log("===============> removeUser Error", e);
    throw e;
  }
};

export const removeContents = async ({
  contId,
}: {
  contId: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeContents", { contId });
  } catch (e) {
    console.log("===============> removeContents Error", e);
    throw e;
  }
};

export const removeComponent = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeComponent", { _id });
  } catch (e) {
    console.log("===============> removeComponent Error", e);
    throw e;
  }
};

export const removeLayout = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeLayout", { _id });
  } catch (e) {
    console.log("===============> removeLayout Error", e);
    throw e;
  }
};

export const removeStyle = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeStyle", { _id });
  } catch (e) {
    console.log("===============> removeStyle Error", e);
    throw e;
  }
};

export const removeTheme = async ({
  _id,
}: {
  _id: number;
}): Promise<object> => {
  try {
    return await deleteAPI("removeTheme", { _id });
  } catch (e) {
    console.log("===============> removeTheme Error", e);
    throw e;
  }
};
