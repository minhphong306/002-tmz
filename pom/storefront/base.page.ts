import { Locator, Page } from '@playwright/test';
export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async go(url: string) {
        return this.page.goto(url);
    }

    genLoc(loc: string): Locator {
        return this.page.locator(loc);
    }

    async waitFor(second: number) {
        await this.page.waitForTimeout(second * 1000);
    }
}