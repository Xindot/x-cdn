var list = [{
  name: 'Vue.js',
  url: 'https://cn.vuejs.org/'
}, {
  name: 'Day.js',
  url: 'https://day.js.org/zh-CN/'
}, {
  name: 'Element UI',
  url: 'https://element.eleme.cn/#/zh-CN'
}, {
  name: 'Ant Design',
  url: 'https://ant.design/index-cn'
}, {
  name: 'Vant',
  url: 'https://youzan.github.io/vant/#/zh-CN/'
}, {
  name: 'Sequelize',
  url: 'https://www.sequelize.com.cn/'
}, {
  name: 'React',
  url: 'https://react.docschina.org/'
}, {
  name: 'TypeScript',
  url: 'https://www.tslang.cn/'
}, {
  name: 'Webpack',
  url: 'https://webpack.docschina.org/'
}, {
  name: 'Lodash',
  url: 'https://www.lodashjs.com/'
}]

list = list.sort(function (a, b) {
  return (a.name.localeCompare(b.name));
});