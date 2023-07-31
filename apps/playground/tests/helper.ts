import {Page} from "@playwright/test";

export const getResourceNodeFromConsoleMap = (page: Page, path: string) => {
    return page.frameLocator('#console')
        .locator(`[data-testid=map-pane] [data-testid='map-node:${path}']`);
}

export const getResourceFromConsoleInteraction = (page: Page, dataTestId: string) => {
    return page.frameLocator('#console').
    locator(`[data-testid='${dataTestId}']`);

}