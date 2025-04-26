document.addEventListener('DOMContentLoaded', function() {
    // 測驗題目及答案
    const quizQuestions = [
        {
            question: "在台積電工作中，發現設備異常時，首要採取的行動是什麼？",
            options: [
                "立即關閉設備電源",
                "通知主管並按照SOP程序處理",
                "自行嘗試修復問題",
                "等待下一班同事接手處理"
            ],
            correctAnswer: 1,
            explanation: "發現設備異常時，應立即通知主管並按照標準作業程序(SOP)處理，確保安全並避免二次損害。",
            category: "設備管理"
        },
        {
            question: "台積電8D問題解決法的第一步驟是什麼？",
            options: [
                "執行暫時防堵措施",
                "選定主題與建立團隊",
                "描述問題與掌握現狀",
                "列出並選定真因"
            ],
            correctAnswer: 1,
            explanation: "台積電8D問題解決法的第一步驟是「選定主題與建立團隊」(D1)，確保有正確的人員參與問題解決過程。",
            category: "問題解決"
        },
        {
            question: "在台積電四班二輪制度中，每月最多可能被要求加班的天數是多少？",
            options: [
                "2天",
                "4天",
                "6天",
                "8天"
            ],
            correctAnswer: 1,
            explanation: "根據台積電四班二輪制度，休假日可能須加班或受訓，每月最多四天，薪水會是雙倍。",
            category: "工作制度"
        },
        {
            question: "台積電技術員面試中，英文測驗通常包含多少題目？",
            options: [
                "10題",
                "15題",
                "20題",
                "25題"
            ],
            correctAnswer: 2,
            explanation: "台積電技術員面試中，英文測驗通常包含約20題選擇題，主要是題庫裡的單字，包括中翻英或英翻中。",
            category: "招聘流程"
        },
        {
            question: "在台積電工作中，處理特殊氣體時，以下哪項做法是錯誤的？",
            options: [
                "確實遵守閥件鎖固方式",
                "按照標準作業程序操作",
                "氣體洩漏警報發出後立即關閉氣體",
                "可以根據經驗靈活調整操作方式"
            ],
            correctAnswer: 3,
            explanation: "處理特殊氣體時，必須嚴格遵守標準作業程序和閥件鎖固方式，不可根據經驗自行調整操作方式，以防止氣體洩漏事故。",
            category: "安全管理"
        },
        {
            question: "台積電對於新設備上線前的安全管控，通常分為幾個階段？",
            options: [
                "兩個階段",
                "三個階段",
                "四個階段",
                "五個階段"
            ],
            correctAnswer: 1,
            explanation: "台積電對於新設備上線前的安全管控分為三個階段，確保設備符合安全標準後才能正式開始生產運作。",
            category: "設備管理"
        },
        {
            question: "台積電作業環境測定的頻率是多久一次？",
            options: [
                "每月一次",
                "每季一次",
                "每半年一次",
                "每年一次"
            ],
            correctAnswer: 2,
            explanation: "台積電每半年均會進行作業環境測定，包含法規所定義的物理性因素等。",
            category: "安全管理"
        },
        {
            question: "在台積電8D問題解決法中，「執行及驗證暫時防堵措施」是第幾步？",
            options: [
                "D2",
                "D3",
                "D4",
                "D5"
            ],
            correctAnswer: 1,
            explanation: "在台積電8D問題解決法中，「執行及驗證暫時防堵措施」是第三步(D3)，在描述問題與掌握現狀(D2)之後進行。",
            category: "問題解決"
        },
        {
            question: "台積電對於二手機台的安全管控，首要確認的是什麼？",
            options: [
                "機台生產效率",
                "機台配置規格及安全連鎖裝置",
                "機台使用年限",
                "機台維修記錄"
            ],
            correctAnswer: 1,
            explanation: "台積電對於購買的二手機台，首要確認的是機台配置規格及安全連鎖裝置，確保機台參數設定及安全連鎖裝置功能正常。",
            category: "設備管理"
        },
        {
            question: "台積電緊急應變訓練中，「明湖消防訓練」的主要目的是什麼？",
            options: [
                "提升消防理論知識",
                "進行實地消防救災訓練",
                "學習消防設備維護",
                "取得消防證照"
            ],
            correctAnswer: 1,
            explanation: "明湖消防訓練是仿效消防人員訓練，委託新竹明湖消防訓練基地進行實地消防救災訓練，目的是提升實際救災能力。",
            category: "安全管理"
        },
        {
            question: "台積電8D問題解決法的思維重點是什麼？",
            options: [
                "找出並責備出錯的人員",
                "檢討流程，檢討機制",
                "盡快解決表面問題",
                "降低解決問題的成本"
            ],
            correctAnswer: 1,
            explanation: "台積電8D問題解決法的思維重點是檢討流程，檢討機制，而非責備出錯的人員。重點是思考如何改善流程，讓問題不再重複發生。",
            category: "問題解決"
        },
        {
            question: "台積電技術員在A18廠的主要工作內容是什麼？",
            options: [
                "進行設備維修",
                "操作一兩台電腦和公務手機，處理設備異常問題",
                "進行晶圓檢測",
                "管理生產線人員"
            ],
            correctAnswer: 1,
            explanation: "台積電A18廠技術員的主要工作是坐在同一個位置，操作一兩台電腦和公務手機，及時處理設備異常問題和聯繫反映。",
            category: "工作內容"
        },
        {
            question: "台積電對於火警預警系統啟動事件的主要預防措施是什麼？",
            options: [
                "增加消防人員巡邏次數",
                "安裝更多滅火器",
                "建立集中管理的手工機具電池充電站，加裝溫度監控",
                "縮短消防演練間隔時間"
            ],
            correctAnswer: 2,
            explanation: "台積電對於火警預警系統啟動事件的主要預防措施是建立集中管理的手工機具電池充電站，並加裝溫度監控，當溫度大於設定值時發出警報。",
            category: "安全管理"
        },
        {
            question: "台積電技術員的英文測驗主要考察什麼內容？",
            options: [
                "英文寫作能力",
                "英文閱讀理解",
                "英文單字題庫中的單字",
                "英文口語表達"
            ],
            correctAnswer: 2,
            explanation: "台積電技術員的英文測驗主要考察英文單字題庫中的單字，包括中翻英或英翻中，大多數題目來自題庫。",
            category: "招聘流程"
        },
        {
            question: "在台積電，工作出錯時應採取的正確態度是什麼？",
            options: [
                "找出並責備出錯的人",
                "檢討流程，思考改善機制",
                "盡快掩蓋錯誤",
                "等待主管指示"
            ],
            correctAnswer: 1,
            explanation: "在台積電，工作出錯時的正確態度是檢討流程，思考改善機制，而非花時間責備出錯的人。重點是如何改善流程，讓問題不再重複發生。",
            category: "問題解決"
        },
        {
            question: "台積電技術員面試中，數學測驗通常考察什麼類型的題目？",
            options: [
                "微積分計算",
                "統計分析",
                "基本計算和時間換算",
                "幾何問題"
            ],
            correctAnswer: 2,
            explanation: "台積電技術員面試中，數學測驗通常考察基本計算和時間換算等實用題目，如產能計算、時差計算等。",
            category: "招聘流程"
        },
        {
            question: "台積電對於氣體洩漏事件的主要預防措施是什麼？",
            options: [
                "增加氣體偵測器數量",
                "減少特殊氣體使用量",
                "確實遵守閥件鎖固方式和標準作業程序",
                "縮短氣體管路檢查間隔"
            ],
            correctAnswer: 2,
            explanation: "台積電對於氣體洩漏事件的主要預防措施是確實遵守閥件鎖固方式和標準作業程序，以防止氣體洩漏事故發生。",
            category: "安全管理"
        },
        {
            question: "台積電8D問題解決法中，「預防再發與標準化」是第幾步？",
            options: [
                "D5",
                "D6",
                "D7",
                "D8"
            ],
            correctAnswer: 2,
            explanation: "在台積電8D問題解決法中，「預防再發與標準化」是第七步(D7)，在執行永久對策與效果確認(D6)之後進行。",
            category: "問題解決"
        },
        {
            question: "台積電技術員面試中，適性測驗主要評估應徵者的什麼特質？",
            options: [
                "專業知識水平",
                "英文能力",
                "個人價值觀和待人處事原則",
                "數學計算能力"
            ],
            correctAnswer: 2,
            explanation: "台積電技術員面試中，適性測驗主要評估應徵者的個人價值觀和待人處事原則，包括對團體的個人特質、能否為團體犧牲個人利益等。",
            category: "招聘流程"
        },
        {
            question: "台積電對於人員受傷事件的主要原因分析是什麼？",
            options: [
                "設備故障",
                "安全意識不足或未確實遵守標準作業程序",
                "工作環境不佳",
                "培訓不足"
            ],
            correctAnswer: 1,
            explanation: "台積電對於人員受傷事件的主要原因分析是安全意識不足或未確實遵守標準作業程序等不安全行為造成。",
            category: "安全管理"
        }
    ];

    // 初始化測驗
    function initQuiz() {
        const questionsContainer = document.getElementById('questions-container');

        quizQuestions.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            questionCard.id = `question-${index}`;

            const questionTitle = document.createElement('div');
            questionTitle.className = 'question-title';
            questionTitle.textContent = `${index + 1}. ${q.question}`;

            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';

            q.options.forEach((option, optionIndex) => {
                const optionLabel = document.createElement('label');
                optionLabel.className = 'option-label';

                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = `question-${index}`;
                radioInput.value = optionIndex;
                radioInput.required = true;

                const optionText = document.createTextNode(option);

                optionLabel.appendChild(radioInput);
                optionLabel.appendChild(optionText);
                optionsContainer.appendChild(optionLabel);
            });

            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'feedback hidden';
            feedbackDiv.id = `feedback-${index}`;

            questionCard.appendChild(questionTitle);
            questionCard.appendChild(optionsContainer);
            questionCard.appendChild(feedbackDiv);
            questionsContainer.appendChild(questionCard);
        });
    }

    // 提交測驗
    document.getElementById('quiz-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let score = 0;
        const userAnswers = [];
        const categoryResults = {};

        // 初始化類別結果
        quizQuestions.forEach(q => {
            if (!categoryResults[q.category]) {
                categoryResults[q.category] = {
                    total: 0,
                    correct: 0
                };
            }
            categoryResults[q.category].total++;
        });

        // 計算分數並顯示反饋
        quizQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            const feedbackDiv = document.getElementById(`feedback-${index}`);

            if (selectedOption) {
                const userAnswer = parseInt(selectedOption.value);
                userAnswers.push(userAnswer);

                if (userAnswer === q.correctAnswer) {
                    score++;
                    feedbackDiv.className = 'feedback correct';
                    feedbackDiv.innerHTML = '<strong>正確!</strong>';
                    categoryResults[q.category].correct++;
                } else {
                    feedbackDiv.className = 'feedback incorrect';
                    feedbackDiv.innerHTML = `<strong>錯誤!</strong> 正確答案是: ${q.options[q.correctAnswer]}`;
                }

                const explanation = document.createElement('div');
                explanation.className = 'explanation';
                explanation.textContent = q.explanation;
                feedbackDiv.appendChild(explanation);

                feedbackDiv.classList.remove('hidden');
            }
        });

        // 顯示分數
        const scoreDisplay = document.getElementById('score-display');
        const scorePercentage = (score / quizQuestions.length) * 100;
        scoreDisplay.textContent = `您的得分: ${score} / ${quizQuestions.length} (${scorePercentage.toFixed(1)}%)`;

        // 顯示類別分析
        const scoreAnalysis = document.getElementById('score-analysis');
        scoreAnalysis.innerHTML = '<h3>類別分析</h3>';

        for (const category in categoryResults) {
            const categoryData = categoryResults[category];
            const categoryPercentage = (categoryData.correct / categoryData.total) * 100;

            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-analysis';

            const categoryTitle = document.createElement('div');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = `${category}: ${categoryData.correct} / ${categoryData.total} (${categoryPercentage.toFixed(1)}%)`;

            const barContainer = document.createElement('div');
            barContainer.className = 'category-bar-container';

            const bar = document.createElement('div');
            bar.className = 'category-bar';
            bar.style.width = `${categoryPercentage}%`;
            bar.textContent = `${categoryPercentage.toFixed(1)}%`;

            barContainer.appendChild(bar);
            categoryDiv.appendChild(categoryTitle);
            categoryDiv.appendChild(barContainer);
            scoreAnalysis.appendChild(categoryDiv);
        }

        // 提供整體建議
        const weakCategories = Object.entries(categoryResults)
            .filter(([_, data]) => (data.correct / data.total) < 0.6)
            .map(([category, _]) => category);

        if (weakCategories.length > 0) {
            const recommendationDiv = document.createElement('div');
            recommendationDiv.innerHTML = `<h3>學習建議</h3><p>建議加強以下領域的知識：${weakCategories.join('、')}</p>`;
            scoreAnalysis.appendChild(recommendationDiv);
        }

        // 顯示結果區域
        document.getElementById('score-container').classList.remove('hidden');
        document.getElementById('submit-btn').disabled = true;

        // 滾動到頂部查看結果
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 初始化測驗
    initQuiz();
});
