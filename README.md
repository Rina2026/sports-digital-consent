# Sports Digital Consent

Google Apps Script 電子簽署 MVP，專為 iPad 與運動場館現場使用設計。

## 功能

- iPad／Apple Pencil 手寫簽名
- 學員、家長、場館與課程資料收集
- 分項影像、AI 分析與行銷授權
- 自動產生案件編號
- 自動寫入 Google Sheet
- 套用 Google Docs 公版
- 自動輸出 PDF 至 Google Drive
- 回傳 PDF 連結

## 部署

1. 到 Google Apps Script 建立獨立專案。
2. 將本 Repository 根目錄的 `.gs`、`.html` 與 `appsscript.json` 複製到 Apps Script。
3. 將 Google Docs 公版放入 Drive 的 `01_Template`。
4. 將公版文件 ID 填入 `Config.gs` 的 `TEMPLATE_DOC_ID`。
5. 執行 `setupSystem()`，授權後初始化資料表。
6. 部署為網頁應用程式。

## Google Docs 公版標籤

```text
{{CASE_ID}}
{{SIGNED_AT}}
{{VENUE}}
{{COURSE}}
{{STUDENT_NAME}}
{{STUDENT_BIRTHDAY}}
{{SIGNER_NAME}}
{{SIGNER_ROLE}}
{{PHONE}}
{{EMAIL}}
{{NOTES}}
{{CONSENT_ITEMS}}
{{SIGNATURE}}
```

正式上線前，請由公司法務或個資顧問確認公版條文、保存期間、撤回流程與公開行銷授權方式。
