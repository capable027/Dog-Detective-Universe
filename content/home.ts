/** 首页文案与列表数据，改这里即可迭代大部分内容 */

export const heroContent = {
  label: "进来坐坐呗",
  greeting: "嗨，你来了",
  nameHighlight: "“I'm glad you came”",
  sloganLine1: "计算机科学与技术 · 大三",
  sloganLine2: "我劝你，大步往明天去",
  infoStrip: [
    { key: "就读院校", value: "华中师范大学" },
    { key: "专业", value: "计算机科学与技术" },
    { key: "年级", value: "大三" },
    { key: "坐标", value: "上海 ｜ 武汉" },
  ],
  tags: ["喜欢睡觉", "也喜欢发呆", "建设自己ing"],
} as const;

export const aboutContent = {
  title: "关于我这个人类",
  paragraphs: [
    "淡淡的就会顺顺的",
    "很喜欢为了爱去做一些疯狂的事 比如去音乐节夜排",
    "其实我线下比线上有趣 认识一下呗老师",
  ],
  meta: [
    "CCNU",
    "上海 ｜ 武汉",
    "前端 / AI",
  ],
  tags: ["ISFP", "偶尔慢热", "maybe眼神清澈的大学生", "偶尔散步但经常宅家", "各大体育馆测评ing", "再就业男团"],
} as const;

export const skillsContent = {
  title: "啃过 / 还在啃的",
  groups: [
    {
      label: "编程语言",
      items: ["HTML", "CSS", "JavaScript", "Python", "C/C++", "SQL"],
    },
    {
      label: "接触过的工具 / 框架",
      items: ["React", "Node.js", "Git", "Next.js", "GitHub", "Vercel", "MySQL", "Spring Boot"],
    },
  ],
} as const;

export const worksContent = {
  title: "做过的一点小事",
  items: [
    {
      title: "项目名称",
      time: "2024",
      type: "课程项目 / 个人项目",
      description: "一两句话描述这个项目是什么、你在里面做了什么。",
    },
    {
      title: "参与过的比赛或活动",
      time: "2023",
      type: "竞赛 / 活动",
      description: "说说你参加了什么，不必非得拿了奖，参与本身就是经历。",
    },
    {
      title: "自己捣鼓的小东西",
      time: "2024",
      type: "自学 / 练手",
      description: "可以是跟教程做的练手项目、自己写的小脚本、或者学某个技术时留下的记录。",
    },
    {
      title: "其他你觉得值得放的东西",
      time: "随时",
      type: "其他",
      description: "不一定要跟技术相关。让别人多了解你一点点，比简历更真实。",
    },
  ],
} as const;

export const hobbiesContent = {
  title: "人总得喜欢点什么吧",
  items: ["历史", "李白", "演唱会", "阳光"] as const,
  note: ["跟着老叔看世界，谢谢老叔，世界这本书我又因为爱多读了一页 📑"]
} as const;

export const contactContent = {
  title: "要不要认识一下",
  intro: "言语再灿烂，也未必有我本人精彩——想聊两句的话，戳下面。",
  links: [
    { href: "capetanzhen@gmail.com", label: "邮件", external: false },
    { href: "https://github.com/capable027", label: "GitHub", external: true },
  ],
} as const;

export const footerContent = {
  lines: [
    "人对爱和永远 · 应该有幻觉",
    "©名子探狗侦",
  ],
} as const;
