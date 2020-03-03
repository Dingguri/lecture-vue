const data = [{
        id: 1,
        name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
        image: 'https://recipe1.ezmember.co.kr/cache/recipe/2015/09/24/c85b068b12b389e774e733a11930d391.jpg'
    },
    {
        id: 2,
        name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
        image: 'https://img.allurekorea.com/allure/2018/11/style_5bfff669d10ea-700x500-1543501841.jpg'
    }
]

export default {
    list(query) {
        return new Promise(res => {
            setTimeout(() => {
                res(data)
            }, 200);
        })
    }
}