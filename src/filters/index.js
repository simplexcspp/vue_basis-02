// 字符串溢出
export const slice = (value, arg) => {
  if (value.length <= arg) {
    return value;
  } else {
    return value.substring(0, arg) + '...';
  }
}

//金钱转换
export const money = value => {
  if (value) {
    return value.toFixed(2);
  } else {
    return '0.00';
  }
}

// 获奖等级
export const prizeLevel = (value) => {
  const price = {
    1: '一等奖',
    2: '二等奖',
    3: '三等奖',
    4: '四等奖',
    5: '五等奖'
  }
  return price[value]
}

// ...