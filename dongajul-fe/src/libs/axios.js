import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://koreanjson.com',
  timeout: 1000, // 일정 시간이 지나면 요청이 취소되도록 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

const request = async (method, url, data = null, params = null) => {
  try {
    const response = await instance({
      method,
      url,
      data,
      params,
    });
    return {
      data: response.data,
    };
  } catch (error) {
    // 오류 처리
    console.error(
      `[${method.toUpperCase()} 오류 발생] end-point: ${url}`,
      error
    );

    throw error;
  }
};

// GET 요청
const $get = async (url, params) => {
  return await request('get', url, null, params);
};

// POST 요청
const $post = async (url, data) => {
  return await request('post', url, data);
};

// PUT 요청
const $put = async (url, data) => {
  return await request('put', url, data);
};

// DELETE 요청
const $delete = async (url, data) => {
  return await request('delete', url, data);
};

export { $get, $post, $put, $delete };

// 사용 예시
// (async () => {
//   try {
//     const getResult = await getRequest('endpoint', { title: '제목1' });
//     console.log('GET 결과:', getResult);

//     const postResult = await postRequest('endpoint', {
//       title: '제목2',
//       content: '내용2',
//     });
//     console.log('POST 결과:', postResult);

//     const putResult = await putRequest('endpoint', { id: '1', title: '제목3' });
//     console.log('PUT 결과:', putResult);

//     const deleteResult = await deleteRequest('endpoint', { id: 1 });
//     console.log('DELETE 결과:', deleteResult);
//   } catch (error) {
//     console.error('error 발생 :', error);
//   }
// })();
