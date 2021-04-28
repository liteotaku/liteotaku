/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
var date = new Date().toISOString();
var content = [
  '---',
  'title: Заголовок',
  'created: ' + date,
  'layout: post',
  '---',

  '',
  'Preview_text',
  '',
  '<!--more-->',
  '',
  '![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)',
  '',
  '# Заголовок',
  ''
  'Full_text',
].join('\n');
