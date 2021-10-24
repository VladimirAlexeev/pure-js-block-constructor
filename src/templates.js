import { row, col, css } from './utils';

function title(block) {
    const { tag = 'h1', styles } = block.options;
    return row(col(`<${tag}>${block.value}<${tag}/>`), css(styles));
    // return `
    //     <div class="row">
    //         <div class="col-sm">
    //             <h1>${block.value}</h1>
    //         </div>
    //     </div>
    // `;
}


function text(block) {
    const { value, options: { styles } } = block;
    return row(col(`<p>${value}</p>`), css(styles));
    // return `
    //     <div class="row">
    //         <div class="col-sm">
    //             <p>${block.value}</p>
    //         </div>
    //     </div>
    // `;
}

function columns (block) {
    const html = block.value.map(col).join('');
    return row(html, css(block.options.styles)); // join with empty string remove comas from array, map return new array
//     return `
//         <div class="row">
// <!--        join with empty string remove comas from array, map return new array -->
//             ${html.join('')}
//         </div>
//     `;
}

function image(block) {
    const { value, options: { styles, imageStyles, alt = '' } } = block;
    return row(`<img style="${css(imageStyles)}" src="${value}" alt="image" width="150" height="150" alt="${alt}" />`, css(styles));
    // return `
    //     <div class="row">
    //         <img src="${block.value}" alt="image" width="150" height="150"/>
    //     </div>
    // `;
}

export const templates = {
  title,
  text,
  image,
  columns
};