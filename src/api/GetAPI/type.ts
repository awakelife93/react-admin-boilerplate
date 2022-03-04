export type ContentsType = {
  contentId: number;
  imageLink: string;
  title: string;
  subTitle: string;
  description: string;
};

export type DesignComponentType = {
  _id: string;
  name: string;
  attribute: object | string | string[];
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};

export type DesignLayoutType = {
  _id: string;
  name: string;
  attribute: object | string | string[];
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};

export type DesignStyleType = {
  _id: string;
  name: string;
  components: string[];
  layouts: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isDeleted: boolean;
};

export type DesignThemeType = {
  _id: string;
  name: string;
  styles: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isDeleted: boolean;
};
