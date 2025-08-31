// AI学习记录簿 - 主要功能脚本

// 词汇数据
const vocabularyData = [
    {
        id: 1,
        title: "大模型 (LLM)",
        description: "基于海量数据训练的"人工智能大脑"",
        category: "ai",
        status: "unlearned",
        definition: "大语言模型（Large Language Model）是一种基于深度学习的自然语言处理模型，通过海量文本数据训练，能够理解和生成人类语言。",
        features: [
            { icon: "🧠", text: "海量数据训练" },
            { icon: "💬", text: "语言理解生成" },
            { icon: "🔍", text: "知识问答推理" }
        ],
        applications: [
            { name: "GPT-4", description: "OpenAI开发的大语言模型" },
            { name: "Claude 3", description: "Anthropic开发的AI助手" },
            { name: "Llama 3", description: "Meta开源的大语言模型" }
        ]
    },
    {
        id: 2,
        title: "Agent (智能体)",
        description: "拥有"大脑"的"虚拟员工"",
        category: "ai",
        status: "unlearned",
        definition: "智能体是一种能够感知环境、做出决策并执行行动的AI系统，遵循感知->决策->行动的循环模式。",
        features: [
            { icon: "👁️", text: "环境感知" },
            { icon: "🧠", text: "智能决策" },
            { icon: "⚡", text: "主动行动" }
        ],
        applications: [
            { name: "Claude Code", description: "自动写代码、调试的AI助手" },
            { name: "订票助手", description: "能自动订机票的智能助手" },
            { name: "客服机器人", description: "24小时在线客服服务" }
        ]
    },
    {
        id: 3,
        title: "MCP (模型上下文协议)",
        description: "AI世界的"万能工具插槽"标准",
        category: "ai",
        status: "unlearned",
        definition: "Model Context Protocol是一种标准协议，规定AI Agent如何发现和使用外部工具、数据，让Agent能安全、标准化地调用一切。",
        features: [
            { icon: "🔌", text: "工具插槽标准" },
            { icon: "🛡️", text: "安全调用" },
            { icon: "📋", text: "标准化接口" }
        ],
        applications: [
            { name: "工具集成", description: "AI调用各种外部工具" },
            { name: "数据访问", description: "安全访问外部数据源" },
            { name: "服务调用", description: "调用各种API服务" }
        ]
    },
    {
        id: 4,
        title: "MCP Server",
        description: "遵守MCP协议的"工具提供方"",
        category: "ai",
        status: "unlearned",
        definition: "MCP Server是遵守MCP协议的服务提供方，将其能力封装成标准服务，供AI Agent调用。",
        features: [
            { icon: "🛠️", text: "工具封装" },
            { icon: "📡", text: "服务提供" },
            { icon: "🔐", text: "协议遵守" }
        ],
        applications: [
            { name: "计算服务", description: "提供数学计算能力" },
            { name: "数据库查询", description: "提供数据查询服务" },
            { name: "文件操作", description: "提供文件管理服务" }
        ]
    },
    {
        id: 5,
        title: "API (应用程序接口)",
        description: "软件与软件之间的"标准订单格式"",
        category: "ai",
        status: "unlearned",
        definition: "API是一套规则和协议，让不同的软件程序能够相互通信和调用功能，就像标准化的订单格式。",
        features: [
            { icon: "📋", text: "标准格式" },
            { icon: "🔗", text: "程序通信" },
            { icon: "🔄", text: "功能调用" }
        ],
        applications: [
            { name: "支付接口", description: "支付宝、微信支付API" },
            { name: "地图服务", description: "高德、百度地图API" },
            { name: "天气服务", description: "天气预报API" }
        ]
    },
    {
        id: 6,
        title: "API Key",
        description: "调用API时的"身份证+信用卡"",
        category: "ai",
        status: "unlearned",
        definition: "API Key是访问API服务的凭证，用于身份验证、权限管理和计费，就像身份证和信用卡的组合。",
        features: [
            { icon: "🆔", text: "身份验证" },
            { icon: "🔑", text: "权限管理" },
            { icon: "💳", text: "计费功能" }
        ],
        applications: [
            { name: "身份验证", description: "验证API调用者身份" },
            { name: "权限控制", description: "控制API访问权限" },
            { name: "使用统计", description: "统计API使用量和费用" }
        ]
    },
    {
        id: 7,
        title: "CLI (命令行界面)",
        description: "通过"文本命令"操作计算机",
        category: "ai",
        status: "unlearned",
        definition: "CLI是通过输入文本命令来操作计算机的界面，高效、自动化，但需要记忆命令，主要为技术人员使用。",
        features: [
            { icon: "⌨️", text: "文本命令" },
            { icon: "⚡", text: "高效操作" },
            { icon: "🤖", text: "自动化" }
        ],
        applications: [
            { name: "系统管理", description: "Linux系统管理命令" },
            { name: "开发工具", description: "Git、npm等开发工具" },
            { name: "服务器操作", description: "远程服务器管理" }
        ]
    },
    {
        id: 8,
        title: "GUI (图形用户界面)",
        description: "通过"点击图形"操作计算机",
        category: "ai",
        status: "unlearned",
        definition: "GUI是通过点击图形元素来操作计算机的界面，直观易用，主要为普通用户使用。",
        features: [
            { icon: "🖱️", text: "图形操作" },
            { icon: "👀", text: "直观易用" },
            { icon: "👥", text: "用户友好" }
        ],
        applications: [
            { name: "操作系统", description: "Windows、macOS桌面" },
            { name: "办公软件", description: "Word、Excel等" },
            { name: "浏览器", description: "Chrome、Firefox等" }
        ]
    },
    {
        id: 9,
        title: "软件",
        description: "由前端 + 后端 + 数据等构成的完整应用程序",
        category: "ai",
        status: "unlearned",
        definition: "软件是由前端界面、后端逻辑、数据库等组件构成的完整应用程序，为用户提供各种功能服务。",
        features: [
            { icon: "🖥️", text: "完整应用" },
            { icon: "🔧", text: "功能服务" },
            { icon: "📱", text: "用户使用" }
        ],
        applications: [
            { name: "微信", description: "社交聊天应用" },
            { name: "Chrome浏览器", description: "网页浏览工具" },
            { name: "淘宝", description: "电商购物平台" }
        ]
    },
    {
        id: 10,
        title: "前端",
        description: "软件的"店面装修和菜单"",
        category: "ai",
        status: "unlearned",
        definition: "前端是软件中用户能看到和交互的部分，负责展示界面和收集用户输入，就像店面的装修和菜单。",
        features: [
            { icon: "🎨", text: "界面展示" },
            { icon: "🖱️", text: "用户交互" },
            { icon: "📱", text: "响应式设计" }
        ],
        applications: [
            { name: "网页设计", description: "HTML、CSS、JavaScript" },
            { name: "移动应用", description: "iOS、Android界面" },
            { name: "桌面软件", description: "Windows应用界面" }
        ]
    },
    {
        id: 11,
        title: "后端",
        description: "软件的"后厨和管理系统"",
        category: "ai",
        status: "unlearned",
        definition: "后端是软件中处理业务逻辑、存储数据的部分，用户看不到但才是核心，就像后厨和管理系统。",
        features: [
            { icon: "⚙️", text: "业务逻辑" },
            { icon: "💾", text: "数据处理" },
            { icon: "🔒", text: "安全控制" }
        ],
        applications: [
            { name: "服务器开发", description: "Node.js、Python、Java" },
            { name: "数据库管理", description: "MySQL、MongoDB等" },
            { name: "API服务", description: "提供数据接口服务" }
        ]
    }
];

// 全局变量
let currentView = 'home';
let currentCategory = 'all';
let filteredVocabulary = [...vocabularyData];

// DOM元素
let vocabularyGrid;
let searchInput;
let searchSuggestions;
let vocabularyDetail;
let vocabularyBooks;
let studyPlanModal;

// 初始化应用
function initApp() {
    console.log('=== 初始化应用开始 ===');
    console.log('词汇数据数量:', vocabularyData.length);
    console.log('当前视图:', currentView);
    console.log('当前分类:', currentCategory);
    
    // 获取DOM元素
    vocabularyGrid = document.getElementById('vocabularyGrid');
    searchInput = document.getElementById('searchInput');
    searchSuggestions = document.getElementById('searchSuggestions');
    vocabularyDetail = document.getElementById('vocabularyDetail');
    vocabularyBooks = document.getElementById('vocabularyBooks');
    studyPlanModal = document.getElementById('studyPlanModal');
    
    // 检查DOM元素是否正确获取
    console.log('vocabularyGrid元素:', vocabularyGrid);
    console.log('searchInput元素:', searchInput);
    console.log('searchSuggestions元素:', searchSuggestions);
    
    if (!vocabularyGrid) {
        console.error('❌ vocabularyGrid元素未找到！');
        return;
    }
    
    // 检查筛选后的词汇
    console.log('筛选后的词汇数量:', filteredVocabulary.length);
    console.log('筛选后的词汇:', filteredVocabulary);
    
    // 渲染词汇网格
    try {
        renderVocabularyGrid();
        console.log('✅ 词汇网格渲染完成');
    } catch (error) {
        console.error('❌ 渲染词汇网格时出错:', error);
    }
    
    // 设置事件监听器
    try {
        setupEventListeners();
        console.log('✅ 事件监听器设置完成');
    } catch (error) {
        console.error('❌ 设置事件监听器时出错:', error);
    }
    
    // 设置搜索功能
    try {
        setupSearch();
        console.log('✅ 搜索功能设置完成');
    } catch (error) {
        console.error('❌ 设置搜索功能时出错:', error);
    }
    
    console.log('=== 初始化应用完成 ===');
}

// 设置事件监听器
function setupEventListeners() {
    console.log('设置事件监听器');
    
    // 分类标签点击
    document.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            console.log('点击分类:', category);
            filterByCategory(category);
        });
    });

    // 底部导航点击 - 修复事件监听器
    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('找到导航按钮数量:', navButtons.length);
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('点击导航按钮:', e.target);
            const navBtn = e.target.closest('.nav-btn');
            if (navBtn) {
                const view = navBtn.dataset.view;
                console.log('切换到视图:', view);
                switchView(view);
            }
        });
    });

    // 关闭详情页
    const closeDetailBtn = document.getElementById('closeDetail');
    if (closeDetailBtn) {
        closeDetailBtn.addEventListener('click', () => {
            vocabularyDetail.classList.remove('show');
        });
    }

    // 返回首页
    const backToHomeBtn = document.getElementById('backToHome');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', () => {
            switchView('home');
        });
    }

    // 关闭学习计划模态框
    const closePlanModalBtn = document.getElementById('closePlanModal');
    if (closePlanModalBtn) {
        closePlanModalBtn.addEventListener('click', () => {
            studyPlanModal.classList.remove('show');
        });
    }
}

// 设置搜索功能
function setupSearch() {
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            showSearchSuggestions(query);
        } else {
            hideSearchSuggestions();
        }
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length > 0) {
            showSearchSuggestions(searchInput.value.trim());
        }
    });

    // 点击外部隐藏搜索建议
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchSuggestions();
        }
    });
}

// 显示搜索建议
function showSearchSuggestions(query) {
    if (!searchSuggestions) return;
    
    const suggestions = vocabularyData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (suggestions.length > 0) {
        searchSuggestions.innerHTML = suggestions.map(item => 
            `<div class="suggestion-item" onclick="selectSuggestion('${item.title}')">
                <strong>${item.title}</strong><br>
                <small>${item.description}</small>
            </div>`
        ).join('');
        searchSuggestions.classList.add('show');
    } else {
        hideSearchSuggestions();
    }
}

// 隐藏搜索建议
function hideSearchSuggestions() {
    if (searchSuggestions) {
        searchSuggestions.classList.remove('show');
    }
}

// 选择搜索建议
function selectSuggestion(title) {
    if (searchInput) {
        searchInput.value = title;
    }
    hideSearchSuggestions();
    const item = vocabularyData.find(v => v.title === title);
    if (item) {
        showVocabularyDetail(item);
    }
}

// 按分类筛选
function filterByCategory(category) {
    currentCategory = category;
    
    // 更新分类标签状态
    document.querySelectorAll('.category-tag').forEach(tag => {
        tag.classList.toggle('active', tag.dataset.category === category);
    });

    // 筛选词汇
    if (category === 'all') {
        filteredVocabulary = [...vocabularyData];
    } else {
        filteredVocabulary = vocabularyData.filter(item => item.category === category);
    }

    renderVocabularyGrid();
}

// 渲染词汇网格
function renderVocabularyGrid() {
    console.log('开始渲染词汇网格，词汇数量:', filteredVocabulary.length);
    
    if (!vocabularyGrid) {
        console.error('vocabularyGrid元素不存在');
        return;
    }
    
    try {
        vocabularyGrid.innerHTML = filteredVocabulary.map(item => `
            <div class="vocabulary-card" onclick="showVocabularyDetailById(${item.id})">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-status status-${item.status}" onclick="changeStatus(event, ${item.id})">
                    ${getStatusText(item.status)}
                </div>
            </div>
        `).join('');
        
        console.log('词汇网格渲染成功，生成了', filteredVocabulary.length, '个卡片');
    } catch (error) {
        console.error('渲染词汇网格时出错:', error);
        vocabularyGrid.innerHTML = '<p style="color: red;">渲染出错，请刷新页面重试</p>';
    }
}

// 通过ID显示词汇详情
function showVocabularyDetailById(id) {
    console.log('点击词汇卡片，ID:', id);
    const item = vocabularyData.find(v => v.id === id);
    if (item) {
        showVocabularyDetail(item);
    } else {
        console.error('未找到ID为', id, '的词汇');
    }
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'unlearned': '未学习',
        'learning': '学习中',
        'familiar': '已熟悉',
        'unfamiliar': '需复习'
    };
    return statusMap[status] || '未学习';
}

// 改变词汇状态
function changeStatus(event, id) {
    event.stopPropagation();
    const item = vocabularyData.find(v => v.id === id);
    if (item) {
        const statuses = ['unlearned', 'learning', 'familiar', 'unfamiliar'];
        const currentIndex = statuses.indexOf(item.status);
        const nextIndex = (currentIndex + 1) % statuses.length;
        item.status = statuses[nextIndex];
        
        // 添加涟漪效果
        createRippleEffect(event);
        
        // 重新渲染
        renderVocabularyGrid();
        
        // 如果当前在词汇簿视图，也更新词汇簿
        if (currentView !== 'home') {
            renderVocabularyBooks();
        }
    }
}

// 创建涟漪效果
function createRippleEffect(event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = event.clientX - event.target.getBoundingClientRect().left + 'px';
    ripple.style.top = event.clientY - event.target.getBoundingClientRect().top + 'px';
    
    event.target.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 显示词汇详情
function showVocabularyDetail(item) {
    if (!vocabularyDetail) return;
    
    const detailTitle = document.getElementById('detailTitle');
    const detailDefinition = document.getElementById('detailDefinition');
    
    if (detailTitle) detailTitle.textContent = item.title;
    if (detailDefinition) detailDefinition.textContent = item.definition;
    
    // 渲染技术特点
    const featuresList = document.getElementById('featuresList');
    if (featuresList) {
        featuresList.innerHTML = item.features.map(feature => `
            <div class="feature-item">
                <div class="feature-icon">${feature.icon}</div>
                <span>${feature.text}</span>
            </div>
        `).join('');
    }
    
    // 渲染应用场景
    const applicationsCarousel = document.getElementById('applicationsCarousel');
    if (applicationsCarousel) {
        applicationsCarousel.innerHTML = item.applications.map(app => `
            <div class="application-item">
                <h4>${app.name}</h4>
                <p>${app.description}</p>
            </div>
        `).join('');
    }
    
    // 设置操作按钮事件
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.onclick = () => {
            const status = btn.dataset.status;
            changeVocabularyStatus(item.id, status);
            if (vocabularyDetail) {
                vocabularyDetail.classList.remove('show');
            }
        };
    });
    
    vocabularyDetail.classList.add('show');
}

// 改变词汇状态
function changeVocabularyStatus(id, status) {
    const item = vocabularyData.find(v => v.id === id);
    if (item) {
        item.status = status;
        renderVocabularyGrid();
        if (currentView !== 'home') {
            renderVocabularyBooks();
        }
        
        // 创建粒子效果
        createParticleEffect(status);
    }
}

// 创建粒子效果
function createParticleEffect(status) {
    const colors = {
        'familiar': '#4caf50',
        'learning': '#2196f3',
        'unfamiliar': '#f44336'
    };
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = colors[status] || '#8a2be2';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
}

// 切换视图
function switchView(view) {
    currentView = view;
    console.log('切换视图到:', view);
    
    // 更新导航按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    if (view === 'home') {
        if (vocabularyBooks) {
            vocabularyBooks.classList.remove('show');
        }
        renderVocabularyGrid();
    } else {
        if (vocabularyBooks) {
            vocabularyBooks.classList.add('show');
            const booksTitle = document.getElementById('booksTitle');
            if (booksTitle) {
                booksTitle.textContent = getBooksTitle(view);
            }
            renderVocabularyBooks();
        }
    }
}

// 获取词汇簿标题
function getBooksTitle(view) {
    const titles = {
        'familiar': '熟悉词汇簿',
        'learning': '学习词汇簿',
        'unfamiliar': '陌生词汇簿'
    };
    return titles[view] || '词汇簿';
}

// 渲染词汇簿
function renderVocabularyBooks() {
    if (!vocabularyBooks) return;
    
    const booksContent = document.getElementById('booksContent');
    if (!booksContent) return;
    
    const statusMap = {
        'familiar': '已熟悉',
        'learning': '学习中',
        'unfamiliar': '需复习'
    };
    
    const status = currentView;
    const items = vocabularyData.filter(item => item.status === status);
    
    if (status === 'unfamiliar' && items.length > 0) {
        booksContent.innerHTML = `
            <div class="book-section">
                <div class="book-title">
                    <i class="fas fa-exclamation-triangle"></i>
                    ${statusMap[status]}词汇 (${items.length})
                </div>
                <button class="generate-plan-btn" onclick="generateStudyPlan()">
                    <i class="fas fa-magic"></i> 一键生成学习计划
                </button>
                <div class="book-grid">
                    ${items.map(item => createBookCard(item)).join('')}
                </div>
            </div>
        `;
    } else {
        booksContent.innerHTML = `
            <div class="book-section">
                <div class="book-title">
                    <i class="fas fa-book"></i>
                    ${statusMap[status]}词汇 (${items.length})
                </div>
                <div class="book-grid">
                    ${items.map(item => createBookCard(item)).join('')}
                </div>
            </div>
        `;
    }
}

// 创建词汇簿卡片
function createBookCard(item) {
    const progress = getProgressByStatus(item.status);
    const lastReview = getLastReviewTime();
    
    return `
        <div class="book-card">
            <h4 class="book-card-title">${item.title}</h4>
            <div class="book-card-info">
                <span>掌握度: ${progress}%</span>
                <span>最后复习: ${lastReview}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <p>${item.description}</p>
        </div>
    `;
}

// 根据状态获取进度
function getProgressByStatus(status) {
    const progressMap = {
        'unlearned': 0,
        'learning': 50,
        'familiar': 100,
        'unfamiliar': 25
    };
    return progressMap[status] || 0;
}

// 获取最后复习时间
function getLastReviewTime() {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) return '今天上午';
    if (hours < 18) return '今天下午';
    return '今天晚上';
}

// 生成学习计划
function generateStudyPlan() {
    if (!studyPlanModal) return;
    
    const unfamiliarItems = vocabularyData.filter(item => item.status === 'unfamiliar');
    const planContent = document.getElementById('planContent');
    if (!planContent) return;
    
    planContent.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <h4>📚 今日学习计划</h4>
            <p>基于您的学习状态，为您生成了以下学习计划：</p>
        </div>
        <div style="margin-bottom: 1rem;">
            <h5>🎯 学习目标</h5>
            <ul style="margin-left: 1rem;">
                <li>掌握 ${unfamiliarItems.length} 个陌生概念</li>
                <li>每个概念学习时间：15-20分钟</li>
                <li>总学习时间：${unfamiliarItems.length * 20} 分钟</li>
            </ul>
        </div>
        <div style="margin-bottom: 1rem;">
            <h5>📖 学习顺序</h5>
            <ol style="margin-left: 1rem;">
                ${unfamiliarItems.map((item, index) => 
                    `<li><strong>${item.title}</strong> - ${item.description}</li>`
                ).join('')}
            </ol>
        </div>
        <div>
            <h5>💡 学习建议</h5>
            <ul style="margin-left: 1rem;">
                <li>先理解概念定义，再学习应用场景</li>
                <li>结合实际例子加深理解</li>
                <li>学习完成后及时标记状态</li>
            </ul>
        </div>
    `;
    
    studyPlanModal.classList.add('show');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);

