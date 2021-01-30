// 洗牌算法生成一个n位数组 
function shuffle(n) {
  const arr = Array(n).fill().map((_, i) => i);
  while(n > 1) {
    const randomNum = Math.floor(Math.random() * n);
    n--;
    [arr[n], arr[randomNum]] = [arr[randomNum], arr[n]];
  }
  
  return arr;
}


const n = 100000000;
const info = `生成${n}个数组[0,1,2,3,4,5,6,7,8,9]，使用洗牌算法洗牌，计算每个数出现的各个位置的概率`;
console.log(info);

// 二维数组，记录每个数字出现在某个位置的次数
const statistics = {};

for (var i = 0; i < n; i++) {
  const arr = shuffle(10);
  arr.forEach((num, j) => {
    if(!statistics[num]) {
      statistics[num] = Array(10).fill().map(() => 0);
    }
    statistics[num][j] += 1;
  })
}
const result = Object.values(statistics).map((val) => {
  return val.map(amount => ((amount/n)*100).toFixed(2) + '%').join('   |  ');
})
console.log(result);