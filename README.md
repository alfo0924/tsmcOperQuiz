<a href="https://alfo0924.github.io/tsmcOperQuiz/">tsmc Oper Quiz</a>
## 網站內容與優點

### 扁平化設計與UI/UX優勢

這個測驗網站採用扁平化設計風格，具有清晰的視覺層次和簡潔的界面元素。網站符合UI/UX十大原則，包括：

- **可見性**：用戶隨時可以看到測驗進度和當前狀態
- **一致性**：整體設計風格統一，色彩搭配協調（主要使用藍色作為主色調）
- **錯誤預防**：必須回答所有問題才能提交測驗
- **美觀極簡**：減少視覺干擾，讓用戶專注於測驗內容
- **即時反饋**：提交後立即顯示結果和詳細解釋

### 測驗內容特點

網站包含20道針對台積電作業員的實務問題，涵蓋多個重要領域：

- 設備管理與操作規範
- 8D問題解決方法
- 工作制度（如四班二輪）
- 安全管理與緊急應變
- 招聘流程相關知識
- 實際工作內容

這些問題內容與台積電實際招聘流程高度相關，對準備面試的應徵者非常有幫助。例如，網站包含了關於台積電技術員面試中常見的筆試內容和適性測驗等相關問題。

### 結果分析功能

測驗完成後，網站提供詳細的結果分析：

- 總分和百分比顯示
- 按類別分析表現（如安全管理、問題解決等）
- 針對弱項提供學習建議
- 每題提供詳細解釋和正確答案

### 響應式設計

網站採用響應式設計，能夠適應不同屏幕尺寸，在手機和電腦上都有良好的顯示效果。

## 程式碼運作邏輯

### HTML結構

HTML代碼建立了基本的頁面結構，主要包含：

1. 頁面標題和說明
2. 分數顯示區域（初始隱藏）
3. 測驗表單區域
4. 提交按鈕

整體結構簡潔明了，便於用戶理解和操作。

### CSS樣式設計

CSS代碼使用了變量定義（`:root`），便於統一管理色彩和樣式：

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #f2f2f2;
    --correct-color: #4caf50;
    --incorrect-color: #f44336;
    /* 其他變量 */
}
```

樣式設計重點包括：

1. 卡片式問題設計，每個問題獨立成卡片
2. 懸停效果增強交互體驗
3. 正確/錯誤答案的視覺區分
4. 分類分析的進度條視覺化
5. 媒體查詢確保在不同設備上的適配性

### JavaScript運作邏輯

JavaScript代碼是網站的核心，主要實現以下功能：

1. **初始化測驗**：
    - 通過`initQuiz()`函數動態生成所有問題卡片
    - 為每個問題創建選項和反饋區域

2. **題庫管理**：
    - 使用`quizQuestions`數組存儲所有測驗題目
    - 每個題目包含問題、選項、正確答案、解釋和類別

3. **提交處理**：
    - 監聽表單提交事件
    - 計算總分和每個類別的得分
    - 顯示詳細的反饋和解釋
    - 分析用戶弱項並提供建議

4. **結果分析**：
    - 計算每個類別的正確率
    - 生成視覺化的進度條
    - 識別需要加強的領域
    - 滾動到頁面頂部顯示結果

5. **用戶體驗優化**：
    - 提交後禁用提交按鈕防止重複提交
    - 使用平滑滾動效果
    - 顯示詳細的答案解釋

### 數據流程

整個網站的數據流程如下：

1. 頁面加載時，JavaScript初始化測驗界面
2. 用戶選擇答案並提交
3. JavaScript計算分數並分析結果
4. 顯示分數、正確答案和解釋
5. 生成類別分析和學習建議


