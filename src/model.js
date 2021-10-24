import image from './assets/image.png';
import { TitleBlock, TextBlock, ColumnBlock, ImageBlock } from './classes/blocks'

const text = 'Alias blanditiis culpa, cumque doloribus eos facere inventore officia, perspiciatis porro quibusdam quos ratione repellendus repudiandae similique velit.';

export const model = [
    new TitleBlock(
        'Pure JS site constructor!',
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    ),
    new ImageBlock(
        image,
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Image'
        }
    ),
    new ColumnBlock(
        [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        ],
        {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    ),
    new TextBlock(
        text,
        {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    ),
    // { type: 'title', value: 'Pure JS site constructor!', options: {
    //         tag: 'h2',
    //         styles: {
    //             background: 'linear-gradient(to right, #ff0099, #493240)',
    //             color: '#fff',
    //             'text-align': 'center',
    //             padding: '1.5rem'
    //         }
    //     }
    // },
    // {
    //     type: 'image', value: image, options: {
    //         styles: {
    //             padding: '2rem 0',
    //             display: 'flex',
    //             'justify-content': 'center'
    //         },
    //         imageStyles: {
    //             width: '500px',
    //             height: 'auto'
    //         },
    //         alt: 'Image'
    //     }
    // },
    // {
    //     type: 'columns', value: [
    //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    //     ], options: {
    //         styles: {
    //             background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
    //             padding: '2rem',
    //             color: '#fff',
    //             'font-weight': 'bold'
    //         }
    //     }
    // },
    // {
    //     type: 'text',
    //     value: text,
    //     options: {
    //         styles: {
    //             background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    //             padding: '1rem',
    //             'font-weight': 'bold'
    //         }
    //     }
    // }
];