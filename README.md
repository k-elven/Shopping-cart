# shopping-cart

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

后端地址：https://apifox.com/apidoc/shared-12ab6b18-adc2-444c-ad11-0e60f5693f66/api-70344187

添加收货地址多选项
1. 在收获地址中，首先应该 
    {新增收货地址} --- {v-if 判断--地址编辑页面}
    将默认地址排在第一位---利用index--将其设置 -- index = 0