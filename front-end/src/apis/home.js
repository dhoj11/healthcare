import auth from './axiosConfig';

export function getDZNotice(){
  const promise = auth.get('/dz/notice');
  return promise;
}

export function getDzNoticeById(dz_notice_id){
  const promise = auth.get('/dz/notice/detail', {params:{dz_notice_id}});
  return promise;
}