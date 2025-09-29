<?php declare(strict_types=1);

namespace ProductSliderHero\Core\Content\Cms\SalesChannel;

use Shopware\Core\Content\Product\Cms\ProductSliderCmsElementResolver;

class ProductSliderHeroCmsElementResolver extends ProductSliderCmsElementResolver
{
    public function getType(): string
    {
        return 'product-slider-hero';
    }
}


