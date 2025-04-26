// 測驗題目數據
const quizData = [
    {
        question: "在台積電的8D問題解決法中，D1代表什麼步驟？",
        options: [
            "描述問題與掌握現狀",
            "選定主題與建立團隊",
            "執行及驗證暫時防堵措施",
            "列出、選定及驗證真因"
        ],
        correctAnswer: 1,
        explanation: "台積電8D問題解決法的第一步(D1)是「選定主題與建立團隊」，確保有正確的人員參與解決問題。",
        category: "問題解決方法"
    },
    {
        question: "在台積電的作業環境中，紅外線熱影像儀主要用於什麼目的？",
        options: [
            "檢測人員體溫",
            "檢測電力設施異常",
            "檢測化學物質洩漏",
            "檢測機台運轉溫度"
        ],
        correctAnswer: 1,
        explanation: "紅外線熱影像儀主要用於檢測電力設施異常，可以發現潛在的電氣故障問題。",
        category: "設備安全管理"
    },
    {
        question: "台積電作業環境測定的頻率為何？",
        options: [
            "每月一次",
            "每季一次",
            "每半年一次",
            "每年一次"
        ],
        correctAnswer: 2,
        explanation: "台積公司每半年均會進行作業環境測定，包含法規所定義的物理性因素。",
        category: "作業環境管理"
    },
    {
        question: "當工作出錯時，根據台積電的理念，應該優先做什麼？",
        options: [
            "找出責任人並懲處",
            "立即向上級報告",
            "檢討流程，思考改善機制",
            "重新培訓所有相關人員"
        ],
        correctAnswer: 2,
        explanation: "工作出錯時，重點不是花時間責備出錯的人，而是該檢討流程，思考改善機制。",
        category: "問題解決方法"
    },
    {
        question: "台積電的二手機台安全管控中，以下哪一項是必要的步驟？",
        options: [
            "只需檢查外觀完整性",
            "確認機台配置規格及安全連鎖裝置",
            "僅需測試運行一次",
            "由原廠商負責所有安全檢查"
        ],
        correctAnswer: 1,
        explanation: "對於台積公司購買之二手機台，需確認機台配置規格及安全連鎖裝置功能正常。",
        category: "設備安全管理"
    },
    {
        question: "在台積電的緊急應變訓練中，不包括以下哪一項？",
        options: [
            "緊急應變小組訓練",
            "明湖消防訓練",
            "顧客服務應變訓練",
            "應變指揮官訓練"
        ],
        correctAnswer: 2,
        explanation: "台積電的緊急應變訓練包含基礎、進階、應變指揮官等課程，以及明湖消防訓練，但不包括顧客服務應變訓練。",
        category: "緊急應變"
    },
    {
        question: "台積電的8D問題解決法中，「D4」代表什麼步驟？",
        options: [
            "執行及驗證暫時防堵措施",
            "列出、選定及驗證真因",
            "執行永久對策與效果確認",
            "預防再發與標準化"
        ],
        correctAnswer: 1,
        explanation: "D4代表「列出、選定及驗證真因」，這是確保找到問題根本原因的關鍵步驟。",
        category: "問題解決方法"
    },
    {
        question: "在機台部分關機及復歸安全管理中，以下哪一項是必須的？",
        options: [
            "只需通知主管即可",
            "確認危害性物質排除",
            "等待下次定期維護再檢查",
            "由IT部門遠程監控"
        ],
        correctAnswer: 1,
        explanation: "部分關機過程中須確認危害性物質排除；復機過程中須確認依循機台開機檢查及簽核程序。",
        category: "設備安全管理"
    },
    {
        question: "台積電新設備安全管制程序中，第一階段主要檢查什麼？",
        options: [
            "機台運行效率",
            "基本安全要求與化學/氣體供應系統",
            "電力設施的紅外線檢測",
            "操作人員的熟練度"
        ],
        correctAnswer: 1,
        explanation: "在第一階段，主要檢查基本安全要求與化學/氣體供應系統，確保基礎安全。",
        category: "設備安全管理"
    },
    {
        question: "根據台積電的問題解決方法，以下哪一項不是解決問題的正確步驟？",
        options: [
            "清楚定義問題",
            "分析問題",
            "直接執行最快的解決方案",
            "找出真因"
        ],
        correctAnswer: 2,
        explanation: "正確的問題解決步驟應該是先清楚定義、分析問題、找出真因、執行對策，而不是直接執行最快的解決方案。",
        category: "問題解決方法"
    },
    {
        question: "在台積電的作業環境中，高風險性作業的標準作業程序制定是基於什麼？",
        options: [
            "僅依據法規要求",
            "作業觀察與暴露物種量測的評估結果",
            "員工投訴數量",
            "國際標準直接套用"
        ],
        correctAnswer: 1,
        explanation: "高風險性作業的標準作業程序是根據作業觀察與暴露物種量測的評估結果來制定的。",
        category: "作業環境管理"
    },
    {
        question: "台積電對於肌肉骨骼傷害的預防措施包括什麼？",
        options: [
            "每天進行兩小時的體能訓練",
            "提供作業員一小時必修課程",
            "每週進行健康檢查",
            "限制工作時間不超過6小時"
        ],
        correctAnswer: 1,
        explanation: "台積電提供作業員一小時必修課程，以提升員工對於肌肉骨骼傷害的認知與預防。",
        category: "健康安全"
    },
    {
        question: "台積電8D問題解決法的主要目的是什麼？",
        options: [
            "只用於處理客訴問題",
            "只用於改善生產效率",
            "作為解決各類問題的統一語言和方法",
            "僅用於設備維護"
        ],
        correctAnswer: 2,
        explanation: "台積電的8D方法被用作公司內部解決問題的統一語言，適用於異常型、改善型和課題達成型三種問題類型。",
        category: "問題解決方法"
    },
    {
        question: "在台積電的安全管理中，對於二手機台的安全確認後，還需要做什麼？",
        options: [
            "不需要額外步驟",
            "依機台裝機安全管制程序執行裝機",
            "只需進行簡單測試",
            "由原廠商負責後續所有事宜"
        ],
        correctAnswer: 1,
        explanation: "確認二手機台基本安全資料後，後續仍需依機台裝機安全管制程序執行裝機，以有效確保機台裝機過程及完成驗收後之安全。",
        category: "設備安全管理"
    },
    {
        question: "台積電8D方法論中，「D8」代表什麼？",
        options: [
            "執行永久對策與效果確認",
            "預防再發與標準化",
            "反省、恭賀團隊及規劃未來方向",
            "描述問題與掌握現狀"
        ],
        correctAnswer: 2,
        explanation: "D8代表「反省、恭賀團隊及規劃未來方向」，這是總結經驗並肯定團隊貢獻的重要步驟。",
        category: "問題解決方法"
    },
    {
        question: "台積電對協力廠商進行的安全訓練主要目的是什麼？",
        options: [
            "提高生產效率",
            "降低生產成本",
            "確保作業安全",
            "增加競爭力"
        ],
        correctAnswer: 2,
        explanation: "台積電對協力廠商進行安全訓練的主要目的是確保作業安全，預防工作場所的事故和傷害。",
        category: "安全訓練"
    },
    {
        question: "在台積電的問題解決思維中，以下哪一項不是正確的做法？",
        options: [
            "利用數據資料找到真因",
            "驗證對策的有效性",
            "依靠經驗直接判斷問題原因",
            "系統性地處理問題"
        ],
        correctAnswer: 2,
        explanation: "在問題解決思維中，不應該只依靠經驗直接判斷問題原因，而是應該利用數據資料找到真因，並驗證對策。",
        category: "問題解決方法"
    },
    {
        question: "台積電晶圓十四廠每月平均約有多少件新設備簽核上線？",
        options: [
            "5件",
            "11件",
            "20件",
            "30件"
        ],
        correctAnswer: 1,
        explanation: "根據資料，台積晶圓十四廠每月平均約有11件新設備簽核上線。",
        category: "設備安全管理"
    },
    {
        question: "台積電的紅外線熱影像儀檢測主要發現了哪些共同異常問題？",
        options: [
            "員工操作錯誤",
            "軟體系統故障",
            "跨廠區的四種共同主要異常",
            "原料品質不良"
        ],
        correctAnswer: 2,
        explanation: "統計分析近年來紅外線熱影像儀檢測結果，確認跨廠區具有四種共同主要異常問題。",
        category: "設備安全管理"
    },
    {
        question: "根據台積電的理念，當發現作業人員操作錯誤時，正確的做法是什麼？",
        options: [
            "立即懲處相關人員",
            "增加監督人員",
            "改善作業流程，設計不易出錯的機制",
            "增加檢查次數"
        ],
        correctAnswer: 2,
        explanation: "重點不是花時間責備造成錯誤的操作人員，而是要思考如何改善流程，設計出人員怎麼操作都不會出錯的機制。",
        category: "問題解決方法"
    }
];

// 初始化變數
let currentQuestion = 0;
let score = 0;
let userAnswers = Array(quizData.length).fill(-1);
let quizCompleted = false;

// DOM元素
const questionCounter = document.getElementById('current-question');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const reviewSection = document.getElementById('review-section');
const scoreElement = document.getElementById('score');
const progressFill = document.getElementById('progress-fill');
const skillAnalysis = document.getElementById('skill-analysis');
const reviewContainer = document.getElementById('review-container');
const retryBtn = document.getElementById('retry-btn');
const backToResultsBtn = document.getElementById('back-to-results');

// 載入問題
function loadQuestion() {
    const question = quizData[currentQuestion];
    questionCounter.textContent = currentQuestion + 1;
    questionText.textContent = question.question;

    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });

    // 更新按鈕狀態
    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === quizData.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

// 選擇選項
function selectOption(index) {
    userAnswers[currentQuestion] = index;

    // 更新UI
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// 下一題
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

// 上一題
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// 提交測驗
function submitQuiz() {
    // 檢查是否所有問題都已回答
    const unanswered = userAnswers.findIndex(answer => answer === -1);

    if (unanswered !== -1) {
        if (!confirm(`您還有${userAnswers.filter(a => a === -1).length}題未回答，確定要提交嗎？`)) {
            currentQuestion = unanswered;
            loadQuestion();
            return;
        }
    }

    // 計算分數
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correctAnswer) {
            score++;
        }
    });

    // 顯示結果
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    scoreElement.textContent = score;
    progressFill.style.width = `${(score / quizData.length) * 100}%`;

    // 生成能力分析
    generateSkillAnalysis();

    // 生成回顧內容
    generateReview();

    quizCompleted = true;
}

// 生成能力分析
function generateSkillAnalysis() {
    // 按類別分析
    const categories = {};

    quizData.forEach((question, index) => {
        if (!categories[question.category]) {
            categories[question.category] = {
                total: 0,
                correct: 0
            };
        }

        categories[question.category].total++;

        if (userAnswers[index] === question.correctAnswer) {
            categories[question.category].correct++;
        }
    });

    skillAnalysis.innerHTML = '';

    // 找出需要加強的領域
    let weakestCategory = null;
    let lowestScore = 1;

    for (const category in categories) {
        const percentage = categories[category].correct / categories[category].total;

        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');

        const skillName = document.createElement('div');
        skillName.classList.add('skill-name');

        const categoryName = document.createElement('span');
        categoryName.textContent = category;

        const categoryScore = document.createElement('span');
        categoryScore.textContent = `${categories[category].correct}/${categories[category].total}`;

        skillName.appendChild(categoryName);
        skillName.appendChild(categoryScore);

        const skillBar = document.createElement('div');
        skillBar.classList.add('skill-bar');

        const skillFill = document.createElement('div');
        skillFill.classList.add('skill-fill');
        skillFill.style.width = `${percentage * 100}%`;
        skillFill.style.backgroundColor = getColorForPercentage(percentage);

        skillBar.appendChild(skillFill);

        skillItem.appendChild(skillName);
        skillItem.appendChild(skillBar);

        skillAnalysis.appendChild(skillItem);

        // 更新最弱類別
        if (percentage < lowestScore) {
            lowestScore = percentage;
            weakestCategory = category;
        }
    }

    // 添加改進建議
    if (weakestCategory) {
        const suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');
        suggestion.innerHTML = `<p><strong>建議加強：</strong> ${weakestCategory}</p>
                               <p>這個領域的得分較低，建議重點複習相關知識和實務操作。</p>`;
        skillAnalysis.appendChild(suggestion);
    }
}

// 根據百分比獲取顏色
function getColorForPercentage(percentage) {
    if (percentage >= 0.8) {
        return '#4caf50'; // 綠色
    } else if (percentage >= 0.6) {
        return '#8bc34a'; // 淺綠色
    } else if (percentage >= 0.4) {
        return '#ffc107'; // 黃色
    } else {
        return '#f44336'; // 紅色
    }
}

// 生成回顧內容
function generateReview() {
    reviewContainer.innerHTML = '';

    quizData.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;

        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. ${question.question}</div>
            <div class="review-options">
                ${question.options.map((option, i) => {
            let className = 'review-option';
            if (i === question.correctAnswer) {
                className += ' review-correct';
            } else if (userAnswer === i && !isCorrect) {
                className += ' review-incorrect';
            }
            return `<div class="${className}">${option}</div>`;
        }).join('')}
            </div>
            <div class="review-explanation">
                <strong>${isCorrect ? '✓ 正確' : '✗ 錯誤'}</strong>: ${question.explanation}
            </div>
        `;

        reviewContainer.appendChild(reviewItem);
    });
}

// 重新測驗
function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = Array(quizData.length).fill(-1);
    quizCompleted = false;

    resultSection.classList.add('hidden');
    reviewSection.classList.add('hidden');
    quizSection.classList.remove('hidden');

    loadQuestion();
}

// 顯示回顧
function showReview() {
    resultSection.classList.add('hidden');
    reviewSection.classList.remove('hidden');
}

// 返回結果
function backToResults() {
    reviewSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
}

// 事件監聽器
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', retryQuiz);
backToResultsBtn.addEventListener('click', backToResults);

// 初始化載入第一個問題
loadQuestion();
