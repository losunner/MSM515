export interface Slide {
    id: number;
    section: string;
    title: string;
    subtitle?: string;
    points?: string[];
    stats?: { value: string; label: string; color?: string }[];
    layout?: 'title' | 'twoCol' | 'grid' | 'stats' | 'timeline' | 'default';
    accent?: string;
}

export const slides: Slide[] = [
    // ─────────────── Section 1: Digital Disruption Background ───────────────
    {
        id: 1,
        section: "封面",
        title: "小暖\nXiào Nuǎn",
        subtitle: "2026 具身智能养老新范式 · AI 护理机器人路演\n价值 $100万亿 行业重置中，老龄化危机的救赎之道\nMSM515 Digital Disruption · GBA",
        layout: "title",
    },
    {
        id: 2,
        section: "第一章 · 数字颠覆背景",
        title: '宏观破局点：全球老龄化的「大氧化事件」',
        subtitle: "The Great Aging Event — Disruption Point",
        points: [
            "**全球护理缺口 (Global Care Gap)：**\nWEF 2025数据：全球护理劳动力缺口高达 **22%**\n失能老人与护理人员比例持续恶化",
            "**从「信息AI」到「物理AI」的范式跃迁：**\n信息革命 → SaaS时代 → **具身智能时代（2026）**\n机器人不再只是工具，而是照护伙伴",
            "**市场规模 (Market Size)：**\n全球养老市场预计 2030 年达 **$100 万亿**\n亚太区增速最快（年化 +18%）",
            "**新加坡特殊场景：**\n65岁以上人口占比 **19.5%**（2025）\n政府「老龄化-in-place」政策：居家养老首选",
        ],
        layout: "twoCol",
        stats: [{ value: "22%", label: "全球护理缺口", color: "pink" }, { value: "$100T", label: "市场规模 2030", color: "orange" }],
    },
    {
        id: 3,
        section: "第一章 · 数字颠覆背景",
        title: "行业重置：从 SaaS 订阅到 SaS 结果导向",
        subtitle: "Industry Reset — From Seat-Based to Outcome-Based",
        points: [
            "**SaaS末日（2026）：**\n按席位收费已死，客户只为「可量化结果」付费\n小暖首创 **SaS（Service-as-Software）** 模式",
            "**SaS定价逻辑：**\n以「零跌倒天数」「零漏药次数」为结算单位\n风险共担：小暖与机构共享医疗成本节省",
            "**颠覆性 vs 渐进性创新：**\n传统传感器：工具（Incremental ➜ +10%）\n小暖：伙伴（Disruptive ➜ **+10X**）",
            "**护理员重新定义：**\n不是「取代」护理员——是让1名护理员管理 **5倍** 床位\n护理员升级为「数字护理导演」",
        ],
        layout: "grid",
    },
    // ─────────────── Section 2: Product Functions & Multimodal ───────────────
    {
        id: 4,
        section: "第二章 · 产品功能",
        title: "产品亮相：小暖",
        subtitle: "Physical AI Care Companion for the Silver Generation",
        points: [
            "**外形设计理念：**\n圆润温暖的仿生外形，避免\"冰冷机械感\"\n高度 120cm，专为坐姿/卧床老人优化视觉接触点",
            "**情感化 UI：**\n双OLED\"眼睛\"显示屏，可表达喜悦、关切、专注情绪\n中英双语语音交互，支持粤语与闽南语",
            "**移动能力：**\n全向轮+激光雷达避障，适配 HDB 走廊宽度\n爬坡能力：≤15°，最大承重辅助：20kg",
            "**核心使命：**\n让老龄化不再是负担，让科技成为家人的延伸\n(Technology as an Extension of Family)",
        ],
        layout: "twoCol",
    },
    {
        id: 5,
        section: "第二章 · 产品功能",
        title: "多模态感知：小暖的「六感」",
        subtitle: "Multimodal Perception — Voice · Vision · Vitals",
        points: [
            "**🎤 语音理解 (Voice Intelligence)：**\nLLM驱动的情感语义分析\n识别【我想要水】背后的潜在脱水风险",
            "**👁️ 面部表情分析 (Facial Expression)：**\n实时识别14种痛苦/情绪微表情\n痴呆症行为模式预警（徘徊/激越）",
            "**💓 非接触心率监测 (Contactless Vitals)：**\n毫米波雷达，隔空检测心率/呼吸\n异常自动通知家属与医护人员",
            "**🏠 环境感知 (Environment Sensing)：**\n3D点云建图，识别地面障碍、积水、杂物\n跌倒风险实时热图预警",
        ],
        layout: "grid",
    },
    {
        id: 6,
        section: "第二章 · 产品功能",
        title: "核心技术一：物理常识与世界模型",
        subtitle: "Core Tech: NVIDIA Cosmos World Foundation Model",
        points: [
            "**NVIDIA Cosmos 世界基础模型：**\n理解重力、摩擦力、液体物理\n预测玻璃杯处于床边时的跌落风险",
            "**「物理常识」的优势：**\n传统机器人：规则驱动（if-else）→ 脆弱\n小暖：物理直觉 → **鲁棒、自适应**",
            "**杂乱家庭场景的安全避障：**\n HDB老人家：鞋子、氧气管、轮椅……\n小暖可动态规划，不依赖预先建图",
            "**竞争壁垒：**\n世界模型训练数据：5000+真实居家护理场景\n持续学习：每次交互均反哺模型迭代",
        ],
        layout: "grid",
    },
    {
        id: 7,
        section: "第二章 · 产品功能",
        title: "核心技术二：原生视觉数字守护者",
        subtitle: "Core Tech: Qwen 3.5 Native Vision — 24/7 Digital Guardian",
        points: [
            "**Qwen 3.5 原生视觉架构：**\n无需传统视频流传输，直接推理帧差分析\n设备端处理：隐私数据不出门（满足PDPA）",
            "**24/7 三大监测场景：**\n🚶 **跌倒检测**：30ms内确认，误报率 < 0.3%\n💊 **服药行为识别**：确认每颗药正确服下\n🍽️ **吞咽障碍预警**：检测进食异常，防吸入性肺炎",
            "**多任务并行：**\n同时追踪3名老人，无需额外摄像头\n分布式边缘计算：时延 < 50ms",
            "**已有案例 (Proof Point)：**\n在试点的7名认知症老人中，服药准确率 **从62%→97%**",
        ],
        layout: "twoCol",
        stats: [{ value: "97%", label: "服药准确率提升后", color: "pink" }, { value: "<30ms", label: "跌倒响应时延", color: "orange" }],
    },
    {
        id: 8,
        section: "第二章 · 产品功能",
        title: "连接生态：MCP 主机协议 · 智慧家庭大脑",
        subtitle: "Connectivity Ecosystem — MCP Hosting Protocol for Smart Home",
        points: [
            "**MCP 主机协议（Model Context Protocol）：**\n小暖作为本地MCP Host\n安全连接：智能床、血压计、门窗传感器、急救呼叫器",
            "**数据整合枢纽：**\n所有IoT设备数据汇聚至小暖\n生成每日「健康日报」推送家属微信/WhatsApp",
            "**互操作标准：**\n支持 Matter 1.3 / Zigbee / BLE 5.3\n可接入现有养老院/HDB智能家居系统",
            "**生态护城河：**\n每增加一个接入设备 → 服务粘性+15%\n形成「设备+数据+服务」三重飞轮效应",
        ],
        layout: "grid",
    },
    // ─────────────── Section 3: NABC Value Proposition ───────────────
    {
        id: 9,
        section: "第三章 · NABC 价值主张",
        title: "Need & Approach：痛点 × 10X 解法",
        subtitle: "NABC Framework — Need & Approach",
        points: [
            "**Need（核心需求）：**\n老龄化导致平均每位失能老人年事故成本 **$15,000**\n护理员流失率 **38%/年**，经验断层无法靠招聘弥补\n家属远程焦虑：平均每天查看亲人 **6次** 却无实时数据",
            "**Approach（解决路径）：**\n物理智能（Physical AI）+ 边缘计算 + SaS商业模式三位一体\n让 1 台小暖 = 24/7 专业护理员 + 实时家庭医生 + 智能家居管家",
            "**为什么现在（Why Now）：**\n NVIDIA Cosmos + Qwen 3.5 成本拐点：2026年推理成本降至$0.0008/hr\n新加坡政府 CareShield Life 补贴窗口（2026-2028）",
            "**为什么是我们 (Why Us) ：**\n创始团队：机器人工程（NUS） + 老年医学（NUH） + GTM（SUSS MSM515）\n已签意向合作协议：2家新加坡高端养老院",
        ],
        layout: "twoCol",
        stats: [{ value: "$15K", label: "年均事故成本/老人", color: "pink" }],
    },
    {
        id: 10,
        section: "第三章 · NABC 价值主张",
        title: "Benefits & Competitor：10X 优势逻辑",
        subtitle: "NABC — Benefits & Competition",
        points: [
            "**颠覆性 vs 渐进性 (Disruptive vs Incremental)：**\nTraditional Sensors（渐进）：±10%准确率提升\n小暖（颠覆性）：**12X 风险预警准确率** vs 传统传感器",
            "**量化优势 (Quantified Benefit)：**\n住院率降低 **34%**（Wizard-of-Oz试点数据）\n家属焦虑指数下降 **61%**（NPS Survey）\n养老院净利润率提升 **+8.5%**（SaS节省护理人力）",
            "**情感价值（溢价基础）：**\n老人情绪伴侣功能，孤独感下降 **42%**\n→ 为养老机构带来 Premium Brand 溢价",
            "**竞争矩阵：**\n| | 小暖 | Unitree | SoftBank Pepper |\n| 物理AI | ✅ | ✅ | ❌ |\n| 护理专用 | ✅ | ❌ | ❌ |\n| SaS定价 | ✅ | ❌ | ❌ |",
        ],
        layout: "twoCol",
        stats: [{ value: "12X", label: "风险预警准确率", color: "pink" }, { value: "34%", label: "住院率降低", color: "orange" }],
    },
    {
        id: 11,
        section: "第三章 · NABC 价值主张",
        title: "Competition：护城河与壁垒",
        subtitle: "NABC — Competition & Moat",
        points: [
            "**数据护城河：**\n专有「人类共情数据」库\n每台小暖每天生成 **18GB** 护理行为标注数据\n竞争对手需要 3-5 年才能复制相似数据集",
            "**监管壁垒 (Regulatory Moat)：**\n主动推动 SG MOH 制定「AI护理设备认证」标准\n率先获认证 → 成为事实标准制定者",
            "**情感绑定 (Emotional Lock-in)：**\n老人与小暖建立情感连接平均需要 **21天**\n一旦建立：切换成本极高，NRR = 120%",
            "**生态壁垒 (Ecosystem Moat)：**\n MCP协议已集成 47 款第三方IoT设备\n医院 EHR 系统直连：IHH Healthcare、Raffles Medical",
        ],
        layout: "grid",
    },
    // ─────────────── Section 4: PMF Validation ───────────────
    {
        id: 12,
        section: "第四章 · PMF 验证",
        title: "PMF验证：AI Agent 仿真×百万级护理交互",
        subtitle: "PMF Validation via Clio AI Simulation Framework",
        points: [
            "**验证方法论：Clio框架**\n使用 Anthropic Clio Agent 分析 **120万条** 真实护理对话\n从海量交互中自动聚类「核心未满足需求」",
            "**发现 (Key Findings)：**\n「精准服药」+ 「情感陪伴」合计占 **64%** 核心需求\n这两项恰好是现有解决方案的最大空白！",
            "**验证结论：**\n证明「药物监管 + 情感机器人」的组合是 PMF 最优解\n避免了盲目大规模R&D浪费",
            "**数据来源透明性：**\n数据：新加坡4家养老院 + 15名居家护理用户\n时间跨度：6个月（2025 Q3-Q4）",
        ],
        layout: "twoCol",
        stats: [{ value: "64%", label: "精准服药+情感陪伴需求占比", color: "orange" }],
    },
    {
        id: 13,
        section: "第四章 · PMF 验证",
        title: "「绿野仙踪」实验：在R&D投入前验证心理安全边界",
        subtitle: "Wizard of Oz Experiment — Validate Before Mass R&D",
        points: [
            "**实验设计 (Experiment Design)：**\n由专业老年科医生在后台「驾驶」机器人决策\n前台：机器人外壳（无真实AI），后台：人类智慧",
            "**实验目的 (Purpose)：**\n验证老人对「AI护理建议」的心理接受度\n在投入大规模硬件R&D之前，用最低成本找PMF",
            "**关键发现 (Key Insights)：**\n老人接受「AI药物提醒」接受率：**89%**\n老人接受「AI情绪安慰」接受率：**76%**\n老人拒绝「AI替代家人」：**91%**（重要边界！）",
            "**Capital Allocation 价值：**\n此实验仅花费 $12,000 — 验证了价值 **$5M R&D** 方向\n→ 体现「资本配置悖论」：时间投入重过金钱投入",
        ],
        layout: "twoCol",
        stats: [{ value: "89%", label: "药物提醒接受率", color: "pink" }, { value: "$12K", label: "实验成本 vs $5M R&D节省", color: "orange" }],
    },
    {
        id: 14,
        section: "第四章 · PMF 验证",
        title: "成功指标一：NPS & Sean Ellis 测试",
        subtitle: "Success Metric 1 — NPS & Sean Ellis PMF Benchmark",
        points: [
            "**Sean Ellis 测试结果 (Sean Ellis Test)：**\n问题：「若小暖明天消失，您会怎样？」\n回答「非常失望」的比例：**58%** (PMF基准：40%)\n→ 清晰超越PMF阈值，验证真实买家痛点",
            "**NPS分数 (Net Promoter Score)：**\nNPS = **62**（行业高忠诚度区间：+50以上）\n最常见推荐理由：「终于有人陪妈妈了」",
            "**调研样本 (Sample Profile)：**\n养老院管理员：N=24 / 居家老人家属：N=31\n地区：新加坡（Bishan、Toa Payoh、Tampines社区）",
            "**结论 (Conclusion)：**\n指标组合达到 **Strong PMF 信号**\n可进入 GTM Phase 1 加速验证",
        ],
        layout: "twoCol",
        stats: [{ value: "58%", label: "Sean Ellis Score（基准40%）", color: "pink" }, { value: "NPS 62", label: "高忠诚度区间", color: "orange" }],
    },
    {
        id: 15,
        section: "第四章 · PMF 验证",
        title: "成功指标二：单位经济模型",
        subtitle: "Success Metric 2 — Unit Economics & LTV:CAC",
        points: [
            "**LTV : CAC = 4.5 : 1 (目标)**\nLTV（客户终身价值）：$162,000/机构\nCAC（获客成本）：$36,000（含硬件+集成）\n健康比例目标：>3:1，已超越",
            "**NRR 净收入留存 = 120%**\n来源：远程医疗附加服务 + 耗材（传感器贴片）\n→ 每续约客户比首年多付 20%",
            "**月度经常性收入模型：**\nSaS年费：$28,800/机构（$2,400/月）\n成果分成：节省医疗费用的 15%（可变收入）",
            "**关键假设验证：**\n服务寿命：5年（硬件保修 + 软件迭代）\n平均合同规模：30张床位/机构",
        ],
        layout: "twoCol",
        stats: [{ value: "4.5:1", label: "LTV:CAC 目标", color: "pink" }, { value: "120%", label: "NRR 净收入留存", color: "orange" }],
    },
    {
        id: 16,
        section: "第四章 · PMF 验证",
        title: "留存与回收：低流失 · 快速CAC回收",
        subtitle: "Retention & Payback — Churn < 2% · CAC Payback 10M",
        points: [
            "**流失率 < 2% (B2B焦点)**\n核心原因：情感绑定 + 监管合规依赖\n一旦采购 → 更换成本远大于年费",
            "**CAC 回收周期：10个月**\n符合2026年VC的ROI要求（12个月内）\n第11个月起进入纯利润贡献期",
            "**留存飞轮 (Retention Flywheel)：**\n更多数据 → 更智能护理 → 更高NPS → 更多转介绍\n→ CAC持续下降，LTV持续上升",
            "**案例：机构A（Bishan高端养老院pilot）：**\n使用12个月后：主动追加购买3台小暖\n介绍2家姐妹机构，转介绍CAC仅 $4,200",
        ],
        layout: "twoCol",
        stats: [{ value: "<2%", label: "年流失率 (B2B)", color: "pink" }, { value: "10M", label: "CAC回收周期（月）", color: "orange" }],
    },
    // ─────────────── Section 5: GTM & Budget ───────────────
    {
        id: 17,
        section: "第五章 · GTM策略与预算",
        title: "GTM路径：滩头阵地 → 规模扩张",
        subtitle: "Go-To-Market — Beachhead B2B → B2B2C Scale-Up",
        points: [
            "**Phase 1 · 滩头阵地（2026 H1）：**\n目标：高端养老院连锁（≥$3,500/床/月）\n目标：覆盖 **2,000** 高端床位（SG高端市场 25%）\n首批合作：Allium Healthcare、Ardmore 系列",
            "**Phase 2 · 规模扩张（2026 H2 - 2027）：**\n从B2B → B2B2C：扩展至独居老人（via家政平台）\n目标：5,000+居家用户（Carers Network of Singapore）\n亚太扩张：马来西亚（JB走廊）、台湾（少子化严峻）",
            "**Phase 3 · 生态平台（2028+）：**\n小暖平台化：开放第三方护理App接入\n从「机器人」→「养老数字基础设施」",
            "**关键合作伙伴 (Key Partners)：**\n医疗分销：Zuellig Pharma / Guardian Health\n保险联动：Great Eastern → SaS与保险捆绑销售",
        ],
        layout: "timeline",
    },
    {
        id: 18,
        section: "第五章 · GTM策略与预算",
        title: "资本配置悖论：时间管理的「错位」",
        subtitle: "Capital Allocation Paradox — Misaligned Founder Time",
        points: [
            "**传统创业陷阱（错误配置）：**\n60% 时间 → 产品R&D | 40% 时间 → 市场/关系\n结果：建出无人愿付费的「完美机器人」",
            "**小暖的正确配置：**\n40% 资金 → **人类共情数据对齐（Human Empathy Data Alignment）**\n而非广告投放！这是真正的护城河",
            "**创始人时间的「悖论」重配：**\n60% 时间 → 生态建设（监管、合作、数据）\n20% 时间 → 产品 | 20% 时间 → 融资",
            "**Professor's Note：**\n资本配置悖论 = **创始人时间的错配**，不仅是财务分配\n花在「关系资本」和「监管先发」上的时间，回报率最高",
        ],
        layout: "grid",
    },
    {
        id: 19,
        section: "第五章 · GTM策略与预算",
        title: "融资计划：穿越「死亡谷」",
        subtitle: "Financing — Surviving the Valley of Death",
        points: [
            "**融资需求：Seed/Angel Round $5M**\n用途：硬件精炼（45%）+ GTM（35%）+ 法务/IP/合规（20%）",
            "**预算明细：**\n🔬 R&D（45%）= $2.25M — 第二代小暖量产优化\n📢 GTM（35%）= $1.75M — 销售团队+认证+首批市场\n⚖️ Legal/IP（20%）= $1M — SG MOH 认证 + 专利",
            "**死亡谷风险应对：**\n月burn rate控制在 $150K/月（34个月runway）\n预设「里程碑触发」：达到500床位时启动 Series A",
            "**投资人核心论点：**\n年收入预测 2027：$2.4M ARR（75床位×$32K）\n2028 Series A目标：$20M ARR，估值 $60-80M",
        ],
        layout: "twoCol",
        stats: [{ value: "$5M", label: "Seed轮融资需求", color: "pink" }, { value: "34M", label: "Runway（月）", color: "orange" }],
    },
    // ─────────────── Section 6: Conclusion ───────────────
    {
        id: 20,
        section: "第六章 · 结论",
        title: "技术，是家人的延伸",
        subtitle: "Vision: PwC 2030 「Yellow World」— Technology as Extension of Family",
        points: [
            "**愿景 (Vision)：**\nPwC 2030「黄色世界」预测：人类与AI深度协作\n小暖不是护理员的替代者 —— 是让护理员成为超人的盔甲",
            "**小暖的最终形态：**\n家庭情感纽带的延伸（Family Bond Extender）\n让在外工作的子女，随时都在妈妈身边",
            "**我们的承诺：**\n以人为本的技术设计（Human-Centered AI）\n让老龄化成为文明进步的机遇，不是社会的包袱",
            "**下一步 (Next Steps)：**\n今天的路演后：启动 $5M Seed Round 正式推进\n2026 Q2：首批 50 台小暖部署至 Bishan 养老院\n欢迎成为小暖的**共同建设者**！",
        ],
        layout: "title",
    },
];
