function parseQuery(str) {
  // 虽然查询部分不是url必要的，但是在这个功能中，没有查询语句就不用进行下去了
  const urlPattern = /^https?:\/\/(\w+\.)+[a-zA-Z]+(:\d+)?((\/\w+)*(\.[a-z]+)?)?\?(\w+=\w+&)*(\w+=\w+)(#.*)?/;
  const result = {};
  // const isVaild = urlPattern.test(str);
  if (!urlPattern.test(str)) return result;
  // 踢掉#部分，防止出现键值对匹配
  const rest = str.match(/\?[^#]*/)[0];
  // 是否允许无值的key？是否允许空key？  
  const queryPattern = /(\w+)=(\w)*/g;
  const matchResult = rest.match(queryPattern);
  matchResult.forEach((v) => {
    const [key, value] = v.split('=');
    result[key] = value;
  });
  return result;
}

// const t1 = 'www.baidu.com?key1=vaule1&key2=vaule2&key3=value3';
// const t2 = '?name=mao&email=123@qq.com';
const t3 = 'http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name=value1';
const t4 = 'http://www.aspxfans.com:8080?boardID=5&ID=24618&page=1#name';
const t5 = 'http://www.aspxfans.com:8080/news/index.asp';


parseQuery(t3);
parseQuery(t4);
parseQuery(t5);
// parseQuery(t2);
