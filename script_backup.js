// 示例词库数据
const wordBank = [
    {
        id: 1,
        word: "大模型 (LLM)", 
        meaning: "本质：基于海量数据训练的'人工智能大脑'\n功能：理解和生成人类语言，进行知识问答、逻辑推理\n例子：GPT-4, Claude 3, Llama 3", 
        status: "unknown" 
    },
    {
        id: 2,
        word: "Agent (智能体)", 
        meaning: "本质：拥有'大脑'的'虚拟员工'\n功能：遵循 感知->决策->行动 的循环，主动调用工具来完成复杂目标\n例子：能自动写代码、调试的Claude Code；能自动订机票的助手", 
        status: "unknown" 
    },
    {
        id: 3,
        word: "MCP (模型上下文协议)", 
        meaning: "本质：对接agent和各类满足mcp协议的mcp server\n功能：规定AI Agent(Client)如何发现和使用外部工具、数据(Server)\n核心：让Agent能安全、标准化地调用一切", 
        status: "unknown" 
    },
    {
        id: 4,
        word: "MCP Server", 
        meaning: "本质：遵守MCP协议的'工具提供方'\n功能：将其能力（如计算、查询数据库）封装成标准服务，供Agent调用", 
        status: "unknown" 
    },
    {
        id: 5,
        word: "API (应用程序接口)", 
        meaning: "本质：软件与软件之间的规则和协议\n功能：一套规则，让不同程序能相互通信和调用功能", 
        status: "unknown" 
    },
    {
        id: 6,
        word: "API Key", 
        meaning: "本质：调用API时的'身份证+信用卡'\n功能：用于身份验证、权限管理和计费", 
        status: "unknown" 
    },
    {
        id: 7,
        word: "CLI (命令行界面)", 
        meaning: "本质：通过'文本命令'操作计算机\n特点：高效、自动化，需记忆命令，主要为技术人员使用", 
        status: "unknown" 
    },
    {
        id: 8,
        word: "GUI (图形用户界面)", 
        meaning: "本质：通过'点击图形'操作计算机\n特点：直观易用，主要为普通用户使用", 
        status: "unknown" 
    },
    {
        id: 9,
        word: "软件", 
        meaning: "本质：由前端 + 后端 + 数据等构成的完整应用程序\n例子：微信、Chrome浏览器", 
        status: "unknown" 
    },
    {
        id: 10,
        word: "前端", 
        meaning: "本质：软件的'店面装修和菜单'\n功能：用户能看到和交互的部分，负责展示和收集输入", 
        status: "unknown" 
    },
    {
        id: 11,
        word: "后端", 
        meaning: "本质：软件的'后厨和管理系统'\n功能：处理业务逻辑、存储数据，用户看不到但才是核心", 
        status: "unknown" 
    }
];

let currentFilter = 'all';
let filteredWords = [...wordBank];

// 移除所有光标闪烁
function removeCursors() {
    // 移除搜索输入框的光标
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.style.caretColor = 'transparent';
        searchInput.style.outline = 'none';
        searchInput.addEventListener('focus', function() { 
            this.style.caretColor = 'transparent'; 
            this.style.outline = 'none'; 
        });
        searchInput.addEventListener('blur', function() { 
            this.style.caretColor = 'transparent'; 
            this.style.outline = 'none'; 
        });
    }
    
    // 移除所有按钮的光标和轮廓
    document.querySelectorAll('button').forEach(button => {
        button.style.outline = 'none';
        button.style.border = 'none';
        button.style.boxShadow = 'none';
        button.addEventListener('focus', function() { 
            this.style.outline = 'none'; 
            this.style.border = 'none';
            this.style.boxShadow = 'none';
        });
        button.addEventListener('active', function() { 
            this.style.outline = 'none'; 
            this.style.border = 'none';
            this.style.boxShadow = 'none';
        });
    });
    
    // 移除所有可点击元素的光标
    document.querySelectorAll('.word-card, .status-tab, div, span, p').forEach(element => {
        element.style.outline = 'none';
        element.style.border = 'none';
        element.style.boxShadow = 'none';
        element.addEventListener('focus', function() { 
            this.style.outline = 'none'; 
            this.style.border = 'none';
            this.style.boxShadow = 'none';
        });
        element.addEventListener('click', function() { 
            this.style.outline = 'none'; 
            this.style.border = 'none';
            this.style.boxShadow = 'none';
        });
    });
    
    // 禁用文本选择
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    
    // 移除所有元素的焦点样式
    document.addEventListener('click', function() {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });
}

// 初始化应用
function initApp() {
    renderWords();
    updateStats();
    setupEventListeners();
    removeCursors();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索框事件
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // 状态标签事件
    document.querySelectorAll('.status-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const status = this.dataset.status;
            filterWords(status);
            updateActiveTab(this);
        });
    });
    

}

// 处理搜索
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === '') {
        filteredWords = wordBank.filter(word => 
            currentFilter === 'all' || word.status === currentFilter
        );
    } else {
        filteredWords = wordBank.filter(word => 
            (currentFilter === 'all' || word.status === currentFilter) &&
            (word.word.toLowerCase().includes(searchTerm) || 
             word.meaning.toLowerCase().includes(searchTerm))
        );
    }
    renderWords();
}

// 过滤词组
function filterWords(status = 'all') {
    currentFilter = status;
    if (status === 'all') {
        filteredWords = [...wordBank];
    } else {
        filteredWords = wordBank.filter(word => word.status === status);
    }
    renderWords();
}

// 渲染词组
function renderWords() {
    const grid = document.getElementById('wordsGrid');
    
    if (filteredWords.length === 0) {
        grid.innerHTML = '<div class="no-words">没有找到匹配的词组</div>';
        return;
    }

    grid.innerHTML = filteredWords.map(word => `
        <div class="word-card ${word.status}" data-id="${word.id}" onclick="toggleWordDetail(${word.id})">
            <div class="word-text">${word.word}</div>
            <div class="word-meaning-inline">${word.meaning.replace(/\n/g, '<br>')}</div>
            <div class="status-buttons-inline">
                <button class="status-btn-inline familiar" onclick="updateWordStatus(${word.id}, 'familiar', event)">熟悉</button>
                <button class="status-btn-inline heard" onclick="updateWordStatus(${word.id}, 'heard', event)">听过</button>
                <button class="status-btn-inline unknown" onclick="updateWordStatus(${word.id}, 'unknown', event)">陌生</button>
            </div>
        </div>
    `).join('');
}

// 切换词语详情显示
function toggleWordDetail(id) {
    const wordCard = document.querySelector(`[data-id="${id}"]`);
    if (wordCard) {
        // 关闭其他所有卡片
        document.querySelectorAll('.word-card').forEach(card => {
            if (card !== wordCard) {
                card.classList.remove('show-meaning');
            }
        });
        
        // 切换当前卡片
        wordCard.classList.toggle('show-meaning');
    }
}

// 更新词语状态
function updateWordStatus(id, status, event) {
    // 阻止事件冒泡，避免触发卡片的点击事件
    if (event) {
        event.stopPropagation();
    }
    
    const word = wordBank.find(w => w.id === id);
    if (word) {
        word.status = status;
        updateStats();
        
        // 立即重新渲染所有卡片，让颜色变化立即生效
        renderWords();
        
        // 如果当前有过滤，重新过滤
        if (currentFilter !== 'all') {
            filterWords();
        }
        
        // 关闭详情显示
        const wordCard = document.querySelector(`[data-id="${id}"]`);
        if (wordCard) {
            wordCard.classList.remove('show-meaning');
        }
    }
}

// 更新统计信息
function updateStats() {
    const total = wordBank.length;
    const familiar = wordBank.filter(w => w.status === 'familiar').length;
    const heard = wordBank.filter(w => w.status === 'heard').length;
    const unknown = wordBank.filter(w => w.status === 'unknown').length;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('familiarCount').textContent = familiar;
    document.getElementById('heardCount').textContent = heard;
    document.getElementById('unknownCount').textContent = unknown;
}



// 更新活跃标签
function updateActiveTab(activeTab) {
    document.querySelectorAll('.status-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', initApp);
