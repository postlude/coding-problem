/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12936
 */
function solution(n, k) {
    // 1~n까지의 숫자 배열 생성
    const numbers = [];
    for (let i = 1; i <= n; i++) numbers.push(i);

    // 팩토리얼 값을 미리 계산해둠
    // index에 맞게 설정(i! = factorial[i])
    const factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    const answer = [];
    k--; // 0-indexed로 변환

    /*
        1 2 3 4
        1 2 4 3
        1 3 2 4
        1 3 4 2
        1 4 2 3
        1 4 3 2
        2 1 3 4
        2 1 4 3
        2 3 1 4
        2 3 4 1
        2 4 1 3
        2 4 3 1
        3 1 2 4
        3 1 4 2
        3 2 1 4
        3 2 4 1
        3 4 1 2
        3 4 2 1
        4 1 2 3
        4 1 3 2
        4 2 1 3
        4 2 3 1
        4 3 1 2
        4 3 2 1
    */
    for (let i = n; i >= 1; i--) {
        // 첫 번재 값을 찾는다고 생각하면 n=4 기준 6개씩 끊긴다.
        // 1: 1~6, 2: 7~12, 3: 13~18, 4: 19~24
        // 왜 6개씩 끊기냐하면, 첫 번째 수를 제외한 나머지 자리수가 3개이므로 3!개의 경우의 수가 있기 때문
        // 따라서 k / factorial[4 - 1] 값의 몫이 첫 번째 자리수
        const idx = Math.floor(k / factorial[i - 1]);
        answer.push(numbers[idx]);
        numbers.splice(idx, 1);
        // 다음번 루프를 위해 나머지 값으로 k를 세팅
        k %= factorial[i - 1];
    }

    return answer;
}
