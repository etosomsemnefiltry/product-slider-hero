import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'product-slider-hero',
    label: 'Product Slider Hero',
    category: 'commerce',
    component: 'sw-cms-block-product-slider-hero',
    previewComponent: 'sw-cms-preview-product-slider-hero',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'full_width'
    },
    slots: {
        productSlider: 'product-slider'
    }
});