import { test, expect as originExpect } from '@playwright/test';
import { productUrl } from './product.data';
import { ProductPage } from '../../pom/storefront/product.page';

const expect = originExpect.configure({ soft: true, timeout: 10_000 });

test.describe('Product demo tests', async () => {
    let productPage: ProductPage;
    test.beforeEach(async ({ page }) => {
        productPage = new ProductPage(page);
        await test.step('Go to product page', async () => {
            await productPage.go(productUrl);
        });

        await test.step('Wait overlay appear and close it', async () => {
            page.on('popup', async page => {
                console.log('Popup appear');
                await expect(productPage.genLoc(productPage.productXpath.discountPopup)).toBeVisible();
                await productPage.genLoc(productPage.productXpath.discountPopupOverlay).click();
            });

            await expect(productPage.genLoc(productPage.productXpath.loadingPersonalize)).toBeHidden();
        });
        
    });

    test('Verify product data valid', async () => {
        await productPage.waitFor(5);

        // Verify overview page
        await expect(productPage.page).toHaveScreenshot('full_page.png', {
            fullPage: true
        });

        // Verify product size
        await expect(productPage.genLoc(productPage.productXpath.sizeBlock)).toHaveScreenshot('size.png');
        
        // Verify product background
        await expect(productPage.genLoc(productPage.productXpath.bgBlock)).toHaveScreenshot('bg.png');

        // Verify quote
        await expect(productPage.genLoc(productPage.productXpath.bgBlock)).toHaveScreenshot('bg.png');

        // Verify couple version
        await expect(productPage.genLoc(productPage.productXpath.coupleBlock)).toHaveScreenshot('couple.png');

        // Verify first skin
        await expect(productPage.genLoc(productPage.productXpath.firstSkinBlock)).toHaveScreenshot('first-skin.png');

        // Verify first hair
        await expect(productPage.genLoc(productPage.productXpath.firstHairBlock)).toHaveScreenshot('first-hair.png');

        // Verify second skin
        await expect(productPage.genLoc(productPage.productXpath.secondSkinBlock)).toHaveScreenshot('second-skin.png');

        // Verify second hair
        await expect(productPage.genLoc(productPage.productXpath.secondHairBlock)).toHaveScreenshot('second-hair.png');
        

    });

    test('Verify product can add to cart and goto checkout page', async ({ page }) => {

    });

    test('Verify checkout success', async ({ page }) => {

    });
})