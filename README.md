# PTE Timer · KO宝的500小时冒险

纯静态、可安装的中文 iPhone PWA。无需构建或 npm。`index.html` 为主程序。

## 功能
- 四模块：Quiz / Active Dialogue / Recording Analysis / Special Training
- Quiz 15分钟目标（正向计时，不自动停止）；暂停/继续/结束保存
- 500小时累计进度、6个中文里程碑与能力目标
- 最近7天柱状图、模块统计、训练历史
- 手动新增、编辑、删除；CSV导出、JSON备份及导入
- 训练策略 Playbook 和自定义本周重点
- 本地离线存储及 PWA 缓存

## 发布（推荐 GitHub Pages，完全静态）
1. 登录 github.com，创建名为 `pte-timer` 的仓库（公开仓库最简单）。
2. 上传此文件夹**内部**的全部文件（保留 assets 子文件夹）。
3. 仓库 Settings → Pages → Build and deployment → Source 选 Deploy from a branch；Branch 选 main / (root) → Save。
4. 等待 Pages 显示部署成功，访问 `https://你的用户名.github.io/pte-timer/`。
5. iPhone Safari 打开地址 → 分享 → 添加到主屏幕。

## 重要：数据与可靠性
数据只保存在**当前设备当前站点**的 localStorage；不是云端同步。清除 Safari 网站数据、换设备或更换域名会导致本地数据不可访问。请定期使用“备份JSON”，并把文件保存在 iCloud Drive。未来可加入 Supabase 云同步。

后台/锁屏不会持续执行计时器，但恢复时依据开始时间戳计算；若忘记暂停，必须手动修正。跨午夜的一个 session 目前按**结束日期**记账。计时记录精确到0.1分钟。

## 本地预览
在此目录运行 `python3 -m http.server 8000`，浏览器打开 http://localhost:8000。PWA 安装与 Service Worker 需要 HTTPS（localhost 例外）。
