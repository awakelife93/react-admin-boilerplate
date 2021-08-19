export interface ContentsIE {
  contId: number;
  contImageLink: string;
  contTitle: string;
  contSubTitle: string;
  contDesc: string;
}

export interface DesignComponentIE {
  _id: string;
  name: string;
  attribute: object | string | string[];
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface DesignLayoutIE {
  _id: string;
  name: string;
  attribute: object | string | string[];
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface DesignStyleIE {
  _id: string;
  name: string;
  components: string[];
  layouts: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isDeleted: boolean;
}

export interface DesignThemeIE {
  _id: string;
  name: string;
  styles: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isDeleted: boolean;
}
