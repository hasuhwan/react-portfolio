interface IelementListDataValue {
  ref: React.RefObject<HTMLDivElement>;
  inView: boolean;
}
interface IelementListData {
  [key: string]: IelementListDataValue;
  Introduce: IelementListDataValue;
  About: IelementListDataValue;
  Skills: IelementListDataValue;
  Archiving: IelementListDataValue;
  Projects: IelementListDataValue;
}
interface IonMoveToElmentListValue {
  [key: string]: () => void;
}
interface IheaderPropsValue {
  onMoveToElmentList: IonMoveToElmentListValue;
}
interface IlayoutPropsValue {
  children: React.ReactNode;
  onMoveToElmentList: IonMoveToElmentListValue;
}
interface ImobilePropsValue extends IheaderPropsValue {
  menuOpen: boolean;
  openHandle: (temp: boolean) => void;
}
interface IaboutValue {
  icon: React.ReactNode;
  title: string;
  body: string;
}
interface IarchivingObjDataValue {
  icon: React.ReactNode;
  link: string;
  contents: string[];
}
interface IarchivingObjData {
  [key: string]: IarchivingObjDataValue;
}
interface IcontentsValue {
  children: React.ReactNode;
  color: string;
  inView: boolean;
  project?: boolean;
}
interface IprojectDataValue {
  image: string[];
  title: string;
  during: string;
  summary: string[];
  info: string[][];
}
interface IprojectsListData {
  [key: string]: IprojectDataValue;
}
interface IprojectValue {
  project: IprojectDataValue;
  inView: boolean;
}
interface IskillDataValue {
  icon: React.ReactNode;
  body: string;
}
interface IskillData {
  [key: string]: IskillDataValue[];
}
interface ItitleValue {
  title: string;
  color: string;
  inView: boolean;
}
export type {
  IelementListData,
  IheaderPropsValue,
  IlayoutPropsValue,
  ImobilePropsValue,
  IaboutValue,
  IarchivingObjData,
  IcontentsValue,
  IprojectsListData,
  IprojectValue,
  IskillData,
  ItitleValue,
};
