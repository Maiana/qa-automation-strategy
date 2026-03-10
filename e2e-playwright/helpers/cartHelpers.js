export async function addProductToCart(inventoryPage) {
  await inventoryPage.assertInventoryPageLoaded();
  await inventoryPage.assertCartBadgeIsEmpty();

  await inventoryPage.addFirstProductToCart();

  await inventoryPage.assertCartBadgeHasItems(1);
}
