/* 액션 타입 선언 */
const LIKE = "LIKE";
const HATE = "HATE";

/* 액션 생성함수 선언 */
export const doLike = ({ alt, src }) => ({
  type: LIKE,
  data: {
    name: alt,
    src: src,
  },
});
export const doHate = ({ alt, src }) => ({
  type: HATE,
  data: {
    name: alt,
    src: src,
  },
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  like: [],
  hate: [],
};

export default function animal(state = initialState, action) {
  switch (action.type) {
    case LIKE:
      return {
        hate: state.hate.filter((val) => val.name !== action.data.name),
        like: state.like.concat(action.data),
      };
    case HATE:
      return {
        hate: state.hate.concat(action.data),
        like: state.like.filter((val) => val.name !== action.data.name),
      };
    default:
      return state;
  }
}
