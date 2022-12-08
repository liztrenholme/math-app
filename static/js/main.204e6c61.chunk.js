(this["webpackJsonpmath-app"]=this["webpackJsonpmath-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"name":"math-app","version":"1.0.0","private":true,"homepage":"https://liztrenholme.github.io/math-app","dependencies":{"@babel/core":"7.7.4","@svgr/webpack":"4.3.3","@typescript-eslint/eslint-plugin":"^2.8.0","@typescript-eslint/parser":"^2.8.0","babel-eslint":"10.0.3","babel-jest":"^24.9.0","babel-loader":"8.0.6","babel-plugin-named-asset-import":"^0.3.5","babel-preset-react-app":"^9.1.0","camelcase":"^5.3.1","case-sensitive-paths-webpack-plugin":"2.2.0","css-loader":"3.2.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^6.6.0","eslint-config-react-app":"^5.1.0","eslint-loader":"3.0.2","eslint-plugin-flowtype":"3.13.0","eslint-plugin-import":"2.18.2","eslint-plugin-jsx-a11y":"6.2.3","eslint-plugin-react":"7.16.0","eslint-plugin-react-hooks":"^1.6.1","file-loader":"4.3.0","fs-extra":"^8.1.0","gh-pages":"^2.1.1","html-webpack-plugin":"4.0.0-beta.5","identity-obj-proxy":"3.0.0","jest":"24.9.0","jest-environment-jsdom-fourteen":"0.1.0","jest-resolve":"24.9.0","jest-watch-typeahead":"0.4.2","mini-css-extract-plugin":"0.8.0","optimize-css-assets-webpack-plugin":"5.0.3","pnp-webpack-plugin":"1.5.0","postcss-flexbugs-fixes":"4.1.0","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"4.0.1","react":"^16.11.0","react-app-polyfill":"^1.0.5","react-dev-utils":"^10.0.0","react-dom":"^16.11.0","react-scripts":"^4.0.0","resolve":"1.12.2","resolve-url-loader":"^3.1.2","sass-loader":"8.0.0","semver":"6.3.0","style-loader":"1.0.0","terser-webpack-plugin":"^4.1.0","ts-pnp":"1.1.5","url-loader":"2.3.0","webpack":"4.41.2","webpack-dev-server":"^3.11.0","webpack-manifest-plugin":"2.2.0","workbox-webpack-plugin":"4.3.1"},"scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"chai":"^4.2.0","chai-spies":"^1.0.0","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.4","react-test-renderer":"^16.12.0"},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":[],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jest-environment-jsdom-fourteen","transform":{"^.+\\\\.(js|jsx|ts|tsx)$":"<rootDir>/node_modules/babel-jest","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"]},"babel":{"presets":["react-app"]}}')},,,function(e,t,i){e.exports=i(19)},,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),n=i(3),o=i.n(n),c=(i(14),i(15),i(1)),p=(i(16),i(4)),m=i(5),r=i(8),l=i(7),d=(i(17),function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){var e=this.props,t=e.answer,i=e.handleChangeInput,a=e.disabled;return s.a.createElement("div",{className:"input"},s.a.createElement("input",{disabled:a,type:"text",value:t,onChange:function(e){return i(e)},pattern:"^[0-9]*$"}))}}]),i}(a.Component)),h=d,g=function(e){return console.log(e),"easy"===e?Math.floor(10*Math.random()):"medium"===e?Math.floor(100*Math.random()):"hard"===e?Math.floor(1e3*Math.random()):"expert"===e?Math.floor(1e4*Math.random()):void 0};var u=i(6),y=(i(18),function(){var e=["https://media.giphy.com/media/xUPGcMzwkOY01nj6hi/giphy.gif","https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif","https://media.giphy.com/media/7GAs8uxFXdKss7gGvD/giphy.gif","https://media.giphy.com/media/8UGGp7rQvfhe63HrFq/giphy.gif","https://media.giphy.com/media/xUPGchCDuw3WnREEKc/giphy.gif","https://media.giphy.com/media/WJ2qYXo1PTskA7kzrc/giphy.gif","https://media.giphy.com/media/Y64uBZCJsl0TS/giphy.gif","https://media.giphy.com/media/cQ75oh2k0p5rSpur1L/giphy.gif","https://media.giphy.com/media/G9Kj87gLF8Z4A/giphy.gif","https://media.giphy.com/media/xT9DPDp0PNRFbuqqli/giphy.gif","https://media.giphy.com/media/lcjv1V5ypsG3djVqg4/giphy.gif","https://media.giphy.com/media/xjUlxQHkMBqSvLeSTy/giphy.gif","https://media.giphy.com/media/qMBcLAlkaEZ7cEXK1A/giphy.gif","https://media.giphy.com/media/xT8qAZ5fePzxYomjDO/giphy.gif","https://media.giphy.com/media/25Xm6UcjDQcP6/giphy.gif","https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif","https://media.giphy.com/media/29rsFlMw8wLlxOCPH1/giphy.gif","https://media.giphy.com/media/KEG5UtvXUD7WPIhhuy/giphy.gif","https://media.giphy.com/media/wGbzbDyVgubXdQfHVR/giphy.gif","https://media.giphy.com/media/l0HlVqSbE6FvUgGkw/giphy.gif","https://media.giphy.com/media/gsRGYCxC5kcTFa8pPF/giphy.gif","https://media.giphy.com/media/bTqgYtFJJkHzxR3oRj/giphy.gif","https://media.giphy.com/media/GaxzIvX4TWD9XSVwgZ/giphy.gif","https://media.giphy.com/media/mS1f8iZy65QIeBXs0V/giphy.gif","https://media.giphy.com/media/xT9IgxYMWIzMTkiaLC/giphy.gif","https://media.giphy.com/media/5xJIIRPC23yZG/giphy.gif","https://media.giphy.com/media/l0MYCKMCJFO8xfJUA/giphy.gif","https://media.giphy.com/media/l2Sqir5ZxfoS27EvS/giphy.gif","https://media.giphy.com/media/5xaOcLRwK0101QyNTwc/giphy.gif","https://media.giphy.com/media/VjkwQWAn85pQEwMX7c/giphy.gif","https://media.giphy.com/media/V7rIHfz5YKykNzEg0o/giphy.gif","https://media.giphy.com/media/ev7pAfA2f8WGlXXzPE/giphy.gif","https://media.giphy.com/media/l0Iy1Q9XnpoVP4B8c/giphy.gif","https://media.giphy.com/media/5JzBSOGkUGwDLkGRWh/giphy.gif","https://media.giphy.com/media/hpf75ds3iiBQdQODyM/giphy.gif","https://media.giphy.com/media/Pf9j6wQgdXmrer4Uxr/giphy.gif","https://media.giphy.com/media/ddAyk5vRf2I2qDa6Am/giphy.gif","https://media.giphy.com/media/fvVtQpTgRRpNi6OUTA/giphy.gif","https://media.giphy.com/media/AFlAxHddRi3Bu/giphy.gif","https://media.giphy.com/media/A441EggWUa7cc/giphy.gif","https://media.giphy.com/media/VerIk7pS3iEEg/giphy.gif","https://media.giphy.com/media/sEZx2dWFBtEdbW0xzM/giphy.gif","https://media.giphy.com/media/xT1R9TQOAcW7AkbV84/giphy.gif","https://media.giphy.com/media/tAr8T8GTQGn7xycujB/giphy.gif","https://media.giphy.com/media/EXFAJtutz5Ig8/giphy.gif","https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif","https://media.giphy.com/media/3ohhwo4PzDFaz2sADu/giphy.gif","https://media.giphy.com/media/t6Kf66K6yn6xi9Ma5U/giphy.gif","https://media.giphy.com/media/Oa5op39YNH8QMAaEco/giphy.gif","https://media.giphy.com/media/S9dEWx09yPN4uU13E4/giphy.gif","https://media.giphy.com/media/9wG8hpQRkHMoDbCqzu/giphy.gif","https://media.giphy.com/media/WhoNyvVjuB88HjDK0l/giphy.gif","https://media.giphy.com/media/JZLaL7vxYBMwOw4Vjd/giphy.gif","https://media.giphy.com/media/gbmWwWm4sGMQvAYm1G/giphy.gif","https://media.giphy.com/media/ka7P8QoXrpm5VX8FrW/giphy.gif"];return e[Math.floor(Math.random()*e.length)]}),f=function(e){return console.log(e.display),s.a.createElement("div",{className:"modal-container",onClick:e.reset},s.a.createElement("img",{src:y(),alt:"yay!"}))},v=function(e){var t=Object(a.useState)("Choose a mode:"),i=Object(c.a)(t,2),n=i[0],o=i[1],p=Object(a.useState)("Choose math function type:"),m=Object(c.a)(p,2),r=m[0],l=m[1],d=Object(a.useState)(null),y=Object(c.a)(d,2),v=y[0],b=y[1],j=Object(a.useState)(null),x=Object(c.a)(j,2),E=x[0],w=x[1],k=Object(a.useState)(""),N=Object(c.a)(k,2),C=N[0],M=N[1],O=Object(a.useState)(null),A=Object(c.a)(O,2),D=A[0],G=A[1],S=Object(a.useState)(0),z=Object(c.a)(S,2),B=z[0],F=z[1],P=Object(a.useState)(!1),W=Object(c.a)(P,2),Q=W[0],T=W[1],R=function(e){if(o(e),M(""),"Choose math function type:"!==r){var t=g(n),i=g(n);if(i>t){var a=t;b(i),w(a)}else b(t),w(i)}},U=function(e){if(l(e),M(""),"Choose a mode:"!==n){var t=g(n),i=g(n);if(i>t){var a=t;b(i),w(a)}else b(t),w(i)}};return console.log("random",v,E),console.log("correct??",D),s.a.createElement("div",{className:"main-container"},D?s.a.createElement(f,{reset:function(){M(""),G(null);var e=g(n),t=g(n);if(t>e){var i=e;b(t),w(i)}else b(e),w(t)}}):null,s.a.createElement("h1",null,"Math Game"),Q?s.a.createElement("div",null,s.a.createElement("h2",null,"You've gotten ",B," correct so far!")):null,s.a.createElement("div",{style:{backgroundColor:"white",borderRadius:"20px",width:"100%"}},s.a.createElement("div",{className:"settings-box"},s.a.createElement("div",null,s.a.createElement("h3",null,n),s.a.createElement("div",{className:"buttons-box"},s.a.createElement("div",{className:"settingBtn ".concat("easy"===n?"active":"inactive"),onClick:function(){return R("easy")}},"easy"),s.a.createElement("div",{className:"settingBtn ".concat("medium"===n?"active":"inactive"),onClick:function(){return R("medium")}},"medium"),s.a.createElement("div",{className:"settingBtn ".concat("hard"===n?"active":"inactive"),onClick:function(){return R("hard")}},"hard"),s.a.createElement("div",{className:"settingBtn ".concat("expert"===n?"active":"inactive"),onClick:function(){return R("expert")}},"expert"))),s.a.createElement("div",null,s.a.createElement("h3",null,r),s.a.createElement("div",{className:"buttons-box"},s.a.createElement("div",{className:"settingBtn ".concat("addition"===r?"active":"inactive"),onClick:function(){return U("addition")}},"+"),s.a.createElement("div",{className:"settingBtn ".concat("subtraction"===r?"active":"inactive"),onClick:function(){return U("subtraction")}},"-"),s.a.createElement("div",{className:"settingBtn ".concat("multiplication"===r?"active":"inactive"),onClick:function(){return U("multiplication")}},"x"),s.a.createElement("div",{className:"settingBtn ".concat("division"===r?"active":"inactive"),onClick:function(){return U("division")}},"/")))),s.a.createElement("div",{className:"mathing-area"},s.a.createElement("div",{className:"equation"},s.a.createElement("div",{style:{margin:"auto"}},null!==v?v:"?","addition"===r?" + ":"subtraction"===r?" - ":"multiplication"===r?" x ":"division"===r?" / ":" ? ",null!==E?E:"?"," ="),s.a.createElement(h,{answer:C,handleChangeInput:function(e){(function(e){console.log(e);var t=e.slice(e.length-1,e.length);return!!/[0-9]/.test(t)}(e.target.value)||""===e.target.value)&&(e.preventDefault(),M(e.target.value))},disabled:!n||!r})),s.a.createElement("div",{className:"mathing-btn-input"},s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"},className:v&&E&&C&&C.length?"submitBtn":"disabled",onClick:function(){if("addition"===r){var e=function(e,t){return e+t+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)}(v,E,t);e===Number(C)?(G(!0),F(B+1)):G(!1)}var t;if("subtraction"===r){var i=function(e,t){return function(e,t){return e-t}(e,t)}(v,E);i===Number(C)?(G(!0),F(B+1)):G(!1)}if("multiplication"===r){var a=function(e,t){return function(e,t){return e*t}(e,t)}(v,E);a===Number(C)?(G(!0),F(B+1)):G(!1)}if("division"===r){var s=function(e,t){return function(e,t){return e/t}(e,t)}(v,E);s===Number(C)?(G(!0),F(B+1)):G(!1)}M(""),T(!0)}},"Submit")))),u.version)};var b=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.204e6c61.chunk.js.map