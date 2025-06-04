/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12936
 */
function solution(n, k) {
    // 1~n까지의 숫자 배열 생성
    const numbers = [];
    for (let i = 1; i <= n; i++) numbers.push(i);

    // 팩토리얼 값을 미리 계산해둠
    const factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    const answer = [];
    k--; // 0-indexed로 변환

    for (let i = n; i >= 1; i--) {
        const idx = Math.floor(k / factorial[i - 1]);
        answer.push(numbers[idx]);
        numbers.splice(idx, 1);
        k %= factorial[i - 1];
    }

    return answer;
}