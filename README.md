# CF-IMAGES

这个模板应该能帮你开始使用 Vite 开发 Vue 3。

## 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用
Vetur）

## `.vue` 导入在 TS 中的类型支持

默认情况下，TypeScript 无法处理 `.vue` 导入的类型信息，因此我们使用 `vue-tsc` 替换了 `tsc` CLI
进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来使 TypeScript
语言服务意识到 `.vue` 类型。

## 自定义配置

查看 [Vite 配置参考](https://vitejs.dev/config/)。

## 项目设置

```sh
npm install
```

### 编译和开发时的热重载

```sh
npm run dev
```

### 类型检查、编译和压缩用于生产环境

```sh
npm run build
```

### 使用 [ESLint](https://eslint.org/)进行代码检查

```sh
npm run lint
```
