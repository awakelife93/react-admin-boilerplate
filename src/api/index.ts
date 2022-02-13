import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import _ from "lodash";
import { UnknownObject } from "../common/type";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../core";

const _showMessageModal = (message: string): void => {
  if (_.isFunction(window.globalFunc.showModalAction)) {
    window.globalFunc.showModalAction({
      type: "MESSAGE",
      item: {
        childrenProps: { message },
      },
    });
  }
};

const baseURL: string = "http://localhost:8080/";
const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: getLocalStorageItem("token")
      ? `Bearer ${getLocalStorageItem("token")}`
      : "",
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const localStorageToken = getLocalStorageItem("token");

    // 토큰이 소실되었을 경우 지워주기
    if (_.isEmpty(localStorageToken)) {
      config.headers.Authorization = "";
    } else {
      if (_.isEmpty(config.headers.Authorization))
        // 토큰이 생겼을 경우 request headers에 달아주기
        config.headers.Authorization = `Bearer ${localStorageToken}`;
    }

    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 토큰 연장
    if (response.status === 201 && !_.isEmpty(response.data.token)) {
      setLocalStorageItem({ token: response.data.token });
    }
    return response;
  },
  (error: any) => {
    const err = error.response ?? error;

    // 네트워크 에러
    if (_.isUndefined(err.status)) {
      console.log("NETWORK ERROR", err);
      _showMessageModal("네트워크가 불안정합니다.");
    }

    // 서버에서도 정의하지 못한 에러이기 때문에 공통 처리
    if (err.status === 500) {
      console.log("500 ERROR", err);
      _showMessageModal(
        "알 수 없는 에러입니다. awakelife93@gmail로 문의주시기 바랍니다."
      );
    }

    // 서버 Auth 실패 -> 로그아웃
    if (err.status === 401) {
      console.log("401 ERROR", err);
      _showMessageModal("로그아웃 되었습니다.");
      removeLocalStorageItem("token");
      if (_.isFunction(window.globalFunc.initUserInfoAction))
        window.globalFunc.initUserInfoAction();
    }

    return Promise.reject(err);
  }
);

const generateQueryEndPoint = (
  endPoint: string,
  params: UnknownObject
): string => {
  let _endPoint = `${endPoint}?`;

  Object.keys(params).forEach((key: string, index: number) => {
    if (index === 0) {
      _endPoint += `${key}=${params[key]}`;
    } else {
      _endPoint += `&${key}=${params[key]}`;
    }
  });

  return _endPoint;
};

export const getAPI = async (
  endPoint: string = "",
  params: UnknownObject = {},
  axiosOption: AxiosRequestConfig = {}
) => {
  const getEndPoint = _.isEmpty(params)
    ? endPoint
    : generateQueryEndPoint(endPoint, params);
  const result: AxiosResponse = await instance.get(getEndPoint, axiosOption);
  return await generateAPIData(result);
};

export const deleteAPI = async (
  endPoint: string = "",
  params: UnknownObject = {},
  axiosOption: AxiosRequestConfig = {}
) => {
  const deleteEndPoint = _.isEmpty(params)
    ? endPoint
    : generateQueryEndPoint(endPoint, params);
  const result: AxiosResponse = await instance.delete(
    deleteEndPoint,
    axiosOption
  );
  return await generateAPIData(result);
};

export const postAPI = async (
  endPoint: string = "",
  data: UnknownObject = {},
  axiosOption: AxiosRequestConfig = {
    timeout: 2000,
  }
) => {
  const result: AxiosResponse = await instance.post(
    endPoint,
    data,
    axiosOption
  );
  return await generateAPIData(result);
};

export const putAPI = async (
  endPoint: string = "",
  data: UnknownObject = {},
  axiosOption: AxiosRequestConfig = {
    timeout: 2000,
  }
) => {
  const result: AxiosResponse = await instance.put(endPoint, data, axiosOption);
  return await generateAPIData(result);
};

export const patchAPI = async (
  endPoint: string = "",
  data: UnknownObject = {},
  axiosOption: AxiosRequestConfig = {
    timeout: 2000,
  }
) => {
  const result: AxiosResponse = await instance.patch(
    endPoint,
    data,
    axiosOption
  );
  return await generateAPIData(result);
};

export const generateAPIData = async (response: AxiosResponse) => {
  // 확장할 것이 있으면 여기에 작성
  return response.data;
};
