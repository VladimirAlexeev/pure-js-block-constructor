import { model } from './model';
import {templates } from './templates';
import './styles/main.css';
import { Site } from './classes/site';
import { SideBar } from './classes/sidebar';
import { App } from './classes/app';

//variables starting with $ is selectors from DOM
// const $site = document.querySelector('#site');
//
// const site = new Site('#site');
//
// site.render(model);
//
// const updateCallback = newBlock => {
//     model.push(newBlock)
//     site.render(model)
// }
//
// new SideBar('#panel', updateCallback);

new App(model).init();


// model.forEach(block => {
//     // let html = '';
//     // if (block.type === 'title') {
//     //     html = title(block);
//     // } else if (block.type === 'text') {
//     //     html = text(block);
//     // } else if (block.type === 'columns') {
//     //     html = columns(block)
//     // } else if (block.type === 'image') {
//     //     html = image(block)
//     // }
//
//     // const toHTML =  templates[block.type];
//     //
//     // if (toHTML) {
//     //     $site.insertAdjacentHTML('beforeend', toHTML(block));
//     // }
//
//     site.insertAdjacentHTML('beforeend', block.toHTML());
// });

