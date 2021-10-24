import { col, css, row } from '../utils';

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Method toHTML must be defined');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { options: {  tag = 'h1', styles }, value } = this;

        return row(col(`<${tag}>${value}<${tag}/>`), css(styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const { value, options: { styles, imageStyles, alt = '' } } = this;

        return row(`<img style="${css(imageStyles)}" src="${value}" alt="image" width="150" height="150" alt="${alt}" />`, css(styles));
    }
}

export class ColumnBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(col).join('');

        return row(html, css(this.options.styles)); // join with empty string remove comas from array, map return new array
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { value, options: { styles } } = this;

        return row(col(`<p>${value}</p>`), css(styles));
    }
}