module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api);
  // 命令
  api.extendPackage({
    scripts: {
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build',
      'buildMode': 'vue-cli-service build',
      'lint': 'vue-cli-service lint',
      'analyz': 'vue-cli-service build --mode analyz'
    },
    'scripts-info': {
      'serve': '运行开发服务器',
      'build': '生产环境执行构建',
      'analyz': '生产环境执行构建打包分析',
      'deploy': '生产环境执行构建并压缩zip包'
    }
  });

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      "axios": "^0.19.1",
      "core-js": "^3.4.4",
      "vue": "^2.6.10"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.1.0",
      "@vue/cli-plugin-eslint": "^4.1.0",
      "@vue/cli-service": "^4.1.0",
      "add-asset-html-webpack-plugin": "^3.1.3",
      "babel-eslint": "^10.0.3",
      "compression-webpack-plugin": "^3.1.0",
      "eslint": "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "progress-bar-webpack-plugin": "^2.1.0",
      "terser-webpack-plugin": "^2.3.2",
      "vue-template-compiler": "^2.6.10"
    }
  });
  // application 应用类型为 mobile
  api.extendPackage({
    devDependencies: {
      'postcss-px-to-viewport': '^1.1.1'
    },
    postcss: {
      plugins: {
        'postcss-px-to-viewport': {
          viewportWidth: 750,
          viewportHeight: 1334,
          unitPrecision: 3,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore', '.hairlines'],
          minPixelValue: 1,
          mediaQuery: false
        }
      }
    }
  });

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path]);
  });

  // 公共基础目录和文件
  api.render('./template');
  if (options.routerVuex === 'router') {
    api.extendPackage({
      dependencies: {
        "vue-router": "^3.1.5"
      }
    });
    api.render('./routerTemplate');
  }else if(options.routerVuex === 'vuex'){
    api.extendPackage({
      dependencies: {
        "vuex": "^3.1.2"
      }
    });
    api.render('./storeTemplate');
  }else if(options.routerVuex === 'all'){
    api.extendPackage({
      dependencies: {
        "vue-router": "^3.1.5",
        "vuex": "^3.1.2"
      }
    });
    api.render('./allTemplate');
  }
  // 屏蔽 generator 之后的文件写入操作
  // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
  });
};
