// index.Data 参数类型
export interface IndexData {
  pageName: string;
  Page: number;
  current: number;
  data: any[];
  status: any[];
  selectValue: string;
  myName: string;
  msg: string;
}

// VUEX index.State 参数类型
export interface IndexState {
  author?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

// 文档编辑页面的 参数类型
export interface addText {
  content?: string;
  editorOption?: {};
  textTitle?: string;
  tags?: any[];
  inputVisible?: boolean;
  inputValue?: string;
}
