import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();

};
export const getReviewData = (data) => {
  return Api.getReviewData(data);

};

