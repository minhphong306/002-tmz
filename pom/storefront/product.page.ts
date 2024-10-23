import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
    productXpath = {
        discountPopup: '//div[@class="discount-popup"]',
        discountPopupOverlay: '//div[contains(@class, "fancybox-slide")]',
        loadingPersonalize: '//div[@class="loading-psnl"]',
        previewButton: '//button[contains(@class, "btn-preview")]',

        sizeBlock: '//div[@class="product-attributes"]',
        bgBlock: '(//div[contains(@id, "artwork-personalized-form")])[1]',
        quoteBlock: '(//div[contains(@id, "artwork-personalized-form")])[2]',
        coupleBlock: '(//div[contains(@id, "artwork-personalized-form")])[3]',
        firstSkinBlock: '(//div[contains(@id, "artwork-personalized-form")])[4]',
        firstHairBlock: '(//div[contains(@id, "artwork-personalized-form")])[5]',
        secondSkinBlock: '(//div[contains(@id, "artwork-personalized-form")])[6]',
        secondHairBlock: '(//div[contains(@id, "artwork-personalized-form")])[7]',
    }

    constructor(page: Page) {
        super(page);
    }
}