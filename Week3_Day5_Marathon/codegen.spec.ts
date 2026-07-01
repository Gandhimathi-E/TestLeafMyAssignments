import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.decathlon.in/');
  await page.locator('[data-test-id="search-input-desktop:container"]').click();
  await page.locator('[data-test-id="search-input-desktop:container"]').fill('shoes');
  await page.locator('[data-test-id="search-input-desktop:container"]').press('Enter');
  await page.locator('[data-test-id="filter-sidebar-desktop:container-13"]').getByRole('button', { name: 'Sport' }).click();
  await page.locator('[data-test-id="filter-item-sport_pratice_en-Running"] [data-test-id="filter-sidebar:item-text"]').click();
  await page.getByRole('button', { name: 'Size' }).click();
  await page.getByText('Uk 10.5 - eu').click();
  await page.locator('[data-test-id="filter-checkbox-indian_size-UK 9.5 - EU 44"]').check();
  await page.goto('https://www.decathlon.in/search?query=shoes&inStock=1&sport_pratice_en=Running&indian_size=UK+10.5+-+EU+45%2CUK+9.5+-+EU+44');
  await page.getByText('Uk 8.5 - eu').click();
  await page.getByRole('button', { name: 'Gender' }).click();
  await page.locator('[data-test-id="filter-item-gender_id_en-MEN"] [data-test-id="filter-sidebar:item-text"]').click();
  await page.getByRole('button', { name: 'Remove Uk 9.5 - eu' }).click();
  await page.locator('[data-test-id="sort-bar-desktop:dropdown-button"]').click();
  await page.locator('[data-test-id="sort-option-dsi_pim_migration_sort discount"]').click();
  await page.locator('[data-test-id="product-card-link"]').nth(1).click();
  await page.locator('[data-test-id="pdp-size-option-button-UK 8.5 - EU 43"]').click();
  await page.locator('[data-test-id="pdp:add-to-cart-button"]').click();
  await page.locator('[data-test-id="header-desktop:cart-link"]').click();
});