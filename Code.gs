function doGet(e) {
  const page = e && e.parameter && e.parameter.page === 'dashboard' ? 'Dashboard' : 'Index';
  return HtmlService.createTemplateFromFile(page)
    .evaluate()
    .setTitle(CONFIG.APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function setupSystem() {
  const result = {
    spreadsheet: setupSpreadsheet_(),
    folders: validateFolders_