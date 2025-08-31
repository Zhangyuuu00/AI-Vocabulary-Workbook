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
    },
    {
        id: 12,
        word: "Netlify", 
        meaning: "本质：一体化的前端云平台与自动化构建引擎。\n功能：连接代码仓库，自动构建、部署静态网站并提供无服务器函数、表单处理等功能。\n特点：与传统静态托管相比，它更全能，以开箱即用的丰富内置功能（如表单、身份验证）和优秀的开发者体验著称，是静态站点和JAMstack架构的首选。", 
        status: "unknown" 
    },
    {
        id: 13,
        word: "Vercel", 
        meaning: "本质：面向前端框架的极致优化型云平台。\n功能：专注于无缝部署前端应用（尤其Next.js），并提供边缘网络和无服务器函数。\n特点：与Netlify相比，它对前端框架（尤其是Next.js）的集成和优化更深度、更极致，专业、高端、速度快，最擅长装修特定风格的网站。", 
        status: "unknown" 
    },
    {
        id: 14,
        word: "Cloudflare", 
        meaning: "本质：一个全球化的网络基础设施与安全服务提供商。\n功能：通过CDN加速全球网站访问，并提供DNS、安全防护（DDoS/WAF）等核心网络服务。\n特点：与前两者不同，它并非主要的构建部署平台，而是底层的基础设施，任何网站都可以放在Netlify/Vercel上并用Cloudflare加速和保护。", 
        status: "unknown" 
    },
    {
        id: 15,
        word: "HTML文件", 
        meaning: "本质：网站的'骨架'和'内容'\n功能：定义网页的结构和内容，是网页的基础框架", 
        status: "unknown" 
    },
    {
        id: 16,
        word: "CSS文件", 
        meaning: "本质：网站的'衣服和化妆品'\n功能：负责美化样式，让网页看起来更美观", 
        status: "unknown" 
    },
    {
        id: 17,
        word: "JavaScript文件", 
        meaning: "本质：网站的'肌肉和大脑'\n功能：负责行为和交互，让网页具有动态功能", 
        status: "unknown" 
    },
    {
        id: 18,
        word: "Next.js", 
        meaning: "本质：一个基于React的'全功能框架'、一个'开箱即用'的现代化框架\n功能：它提供了一套规则和现成的工具，让你能更轻松、更高效地建造现代网站，以简化开发流程。", 
        status: "unknown" 
    },
    {
        id: 19,
        word: "React", 
        meaning: "本质：一个用于构建动态和交互式用户界面（UI）的JavaScript库\n功能：把网页上每个部分组件化，通过虚拟DOM的技术高效更新", 
        status: "unknown" 
    }
];

let currentFilter = 'all';
let filteredWords = [...wordBank];

// 从localStorage加载词语状态
function loadWordStatuses() {
    const savedStatuses = localStorage.getItem('wordStatuses');
    if (savedStatuses) {
        try {
            const statuses = JSON.parse(savedStatuses);
            // 更新wordBank中每个词语的状态
            wordBank.forEach(word => {
                if (statuses[word.id] && statuses[word.id].status) {
                    word.status = statuses[word.id].status;
                }
            });
            console.log('✅ 已从localStorage加载词语状态');
        } catch (error) {
            console.error('❌ 加载词语状态时出错:', error);
        }
    }
}

// 保存词语状态到localStorage
function saveWordStatuses() {
    try {
        const statuses = {};
        wordBank.forEach(word => {
            statuses[word.id] = {
                status: word.status,
                lastUpdated: new Date().toISOString()
            };
        });
        localStorage.setItem('wordStatuses', JSON.stringify(statuses));
        console.log('✅ 词语状态已保存到localStorage');
    } catch (error) {
        console.error('❌ 保存词语状态时出错:', error);
    }
}

// 移除所有光标闪烁
function removeCursors() {
    // 保留搜索输入框的正常功能，不干扰输入
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // 确保搜索框可以正常输入
        searchInput.style.caretColor = '#333';
        searchInput.style.outline = 'none';
        searchInput.style.userSelect = 'text';
        searchInput.style.webkitUserSelect = 'text';
        searchInput.style.mozUserSelect = 'text';
        searchInput.style.msUserSelect = 'text';
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
    
    // 移除所有元素的焦点样式，但保留搜索框的焦点
    document.addEventListener('click', function(e) {
        // 如果点击的是搜索框或其容器，不执行blur操作
        if (e.target.closest('.search-container') || e.target.closest('.search-input')) {
            return;
        }
        
        if (document.activeElement && !document.activeElement.closest('.search-container')) {
            document.activeElement.blur();
        }
    });
}

// 初始化应用
function initApp() {
    // 首先加载保存的词语状态
    loadWordStatuses();
    
    renderWords();
    updateStats();
    setupEventListeners();
    removeCursors();
    
    console.log('✅ 应用初始化完成，词语状态已恢复');
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索框事件
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        // 添加回车键搜索功能
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // 搜索按钮事件
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    // 状态标签事件
    document.querySelectorAll('.status-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const status = this.dataset.status;
            filterWords(status);
            updateActiveTab(this);
        });
    });
    
    // 统计区域点击事件
    document.querySelectorAll('.stat-item').forEach(statItem => {
        statItem.addEventListener('click', function() {
            const status = this.dataset.status;
            filterWords(status);
            updateActiveTabAndStats(status);
        });
    });
    
    // 词汇关系网按钮事件
    const relationshipBtn = document.getElementById('relationshipBtn');
    if (relationshipBtn) {
        relationshipBtn.addEventListener('click', showRelationshipModal);
    }
    
    // 模态框关闭按钮事件
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeRelationshipModal);
    }
    
    // 点击模态框外部关闭
    const modal = document.getElementById('relationshipModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeRelationshipModal();
            }
        });
    }
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeRelationshipModal();
        }
    });
}

// 处理搜索（点击搜索按钮后执行）
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // 如果搜索框为空，显示所有词语
        filteredWords = wordBank.filter(word => 
            currentFilter === 'all' || word.status === currentFilter
        );
    } else {
        // 执行搜索
        filteredWords = wordBank.filter(word => 
            (currentFilter === 'all' || word.status === currentFilter) &&
            (word.word.toLowerCase().includes(searchTerm) || 
             word.meaning.toLowerCase().includes(searchTerm))
        );
    }
    
    renderWords();
    
    // 显示搜索结果提示
    if (searchTerm !== '') {
        console.log(`🔍 搜索"${searchTerm}"，找到 ${filteredWords.length} 个结果`);
    }
}

// 处理搜索框输入（仅用于清空搜索框时恢复显示）
function handleSearchInput(e) {
    const searchTerm = e.target.value.trim();
    if (searchTerm === '') {
        // 当搜索框被清空时，恢复显示当前筛选的词语
        if (currentFilter === 'all') {
            filteredWords = [...wordBank];
        } else {
            filteredWords = wordBank.filter(word => word.status === currentFilter);
        }
        renderWords();
    }
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
        
        // 保存状态到localStorage
        saveWordStatuses();
        
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
        
        console.log(`✅ 词语"${word.word}"状态已更新为"${status}"并保存`);
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

// 更新活跃标签和统计区域状态
function updateActiveTabAndStats(status) {
    // 更新顶部标签
    updateActiveTab(document.querySelector(`[data-status="${status}"]`));
    
    // 更新统计区域活跃状态
    document.querySelectorAll('.stat-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeStatItem = document.querySelector(`.stat-item[data-status="${status}"]`);
    if (activeStatItem) {
        activeStatItem.classList.add('active');
    }
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

function generateRelationshipNetwork() {
    const networkContainer = document.getElementById('relationshipNetwork');
    if (!networkContainer) return;
    
    // 清空容器
    networkContainer.innerHTML = '';
    
                // 直接显示图片
            const networkHTML = `
                <div class="image-display">
                    <img src="deepseek_mermaid_20250831_888dff.png" alt="AI系统架构图" class="architecture-image">
                    <div class="image-caption">
                        <h3>🔗 AI智能体系统架构图</h3>
                        <p>完整的AI系统架构关系图，展示了从用户界面到AI核心的完整数据流</p>
                    </div>
                </div>
            `;
    
    networkContainer.innerHTML = networkHTML;
}

function analyzeWordRelationships() {
    // 严格按照第一张图片的AI系统架构关系来组织
    const groups = [
        {
            name: "用户与界面层",
            color: "blue",
            words: wordBank.filter(word => 
                word.word.includes('GUI') || 
                word.word.includes('CLI')
            ),
            connections: ["用户体验", "交互设计", "操作方式"],
            position: "top-right"
        },
        {
            name: "软件系统层",
            color: "red",
            words: wordBank.filter(word => 
                word.word.includes('前端') || 
                word.word.includes('后端') ||
                word.word.includes('软件')
            ),
            connections: ["系统设计", "架构模式", "数据流"],
            position: "right"
        },
        {
            name: "AI智能体核心",
            color: "orange",
            words: wordBank.filter(word => 
                word.word.includes('Agent') || 
                word.word.includes('智能体')
            ),
            connections: ["自主决策", "任务执行", "虚拟员工"],
            position: "left-top"
        },
        {
            name: "大模型 (LLM)",
            color: "orange",
            words: wordBank.filter(word => 
                word.word.includes('大模型') || 
                word.word.includes('LLM')
            ),
            connections: ["AI智能中心", "自然语言处理", "知识推理"],
            position: "center-right"
        },
        {
            name: "MCP协议层",
            color: "grey",
            words: wordBank.filter(word => 
                word.word.includes('MCP') || 
                word.word.includes('协议')
            ),
            connections: ["模型通信", "工具调用", "标准化"],
            position: "left"
        },
        {
            name: "通信接口层",
            color: "grey",
            words: wordBank.filter(word => 
                word.word.includes('API') || 
                word.word.includes('接口')
            ),
            connections: ["服务集成", "数据交换", "功能调用"],
            position: "left-bottom"
        },
        {
            name: "安全认证层",
            color: "blue",
            words: wordBank.filter(word => 
                word.word.includes('Key') || 
                word.word.includes('认证')
            ),
            connections: ["身份验证", "访问控制", "权限管理"],
            position: "bottom"
        }
    ];
    
    // 过滤掉空的组
    return groups.filter(group => group.words.length > 0);
}

function generateWordNode(word, groupColor) {
    // 为每个词语生成圆圈节点
    return `
        <div class="word-node">
            <div class="word-node-content ${groupColor}">
                <div class="word-node-title">${word.word}</div>
                <div class="word-node-status ${word.status}"></div>
            </div>
        </div>
    `;
}

// 词汇关系网功能
function showRelationshipModal() {
    const modal = document.getElementById('relationshipModal');
    if (modal) {
        modal.classList.add('show');
        generateRelationshipNetwork();
        console.log('🔗 词汇关系网模态框已打开');
    }
}

function closeRelationshipModal() {
    const modal = document.getElementById('relationshipModal');
    if (modal) {
        modal.classList.remove('show');
        console.log('🔗 词汇关系网模态框已关闭');
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', initApp);
