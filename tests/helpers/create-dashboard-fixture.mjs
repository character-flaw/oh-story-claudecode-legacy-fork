import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

async function write(root, relativePath, content) {
  const target = resolve(root, relativePath);
  await mkdir(resolve(target, ".."), { recursive: true });
  await writeFile(target, content, "utf8");
}

/**
 * Build a neutral Dashboard fixture without importing any public demo novel,
 * author showcase, or benchmark corpus into this repository.
 */
export async function createDashboardFixture(root) {
  const files = new Map([
    ["拆文库/对标样本甲/_progress.md", "# 拆文进度\n\n状态：完成\n"],
    ["拆文库/对标样本甲/快速预览.md", "# 快速预览\n\n中性测试数据。\n"],
    ["拆文库/对标样本甲/概要.md", "# 概要\n\n用于测试目录浏览。\n"],
    ["拆文库/对标样本甲/文风.md", "# 文风\n\n叙事自然，长短句交替。\n"],
    ["拆文库/对标样本甲/拆文报告.md", "# 对标样本甲\n\n仅用于 Dashboard 回归测试。\n"],
    ["拆文库/对标样本甲/章节/第1章.md", "# 第一章\n\n测试章节。\n"],
    ["拆文库/对标样本甲/角色/顾临.md", "# 顾临\n\n中性测试角色。\n"],
    ["拆文库/对标样本乙/概要.md", "# 对标样本乙\n\n第二个中性拆文样本。\n"],
    ["拆文库/对标样本乙/文风.md", "# 文风\n\n用于验证多拆文库扫描。\n"],
    ["长篇/测试长篇项目/大纲/大纲.md", "# 大纲\n\n中性测试项目。\n"],
    ["长篇/测试长篇项目/大纲/细纲_第001章.md", "# 第001章细纲\n"],
    ["长篇/测试长篇项目/大纲/细纲_第002章.md", "# 第002章细纲\n"],
    ["长篇/测试长篇项目/大纲/细纲_第003章.md", "# 第003章细纲\n"],
    ["长篇/测试长篇项目/正文/第001章.md", "# 第001章\n\n顾临推开门。\n"],
    ["长篇/测试长篇项目/设定/文风.md", "# 文风\n\n自然叙事。\n"],
    ["长篇/测试长篇项目/设定/世界设定.md", "# 世界设定\n"],
    ["长篇/测试长篇项目/设定/角色/顾临.md", "# 顾临\n\n测试主角。\n"],
    ["长篇/测试长篇项目/设定/角色/关系.md", "# 关系\n\n顾临与配角的关系。\n"],
    ["长篇/测试长篇项目/追踪/上下文.md", "# 上下文\n"],
    ["长篇/测试长篇项目/追踪/伏笔.md", "# 伏笔\n"],
    ["长篇/测试长篇项目/追踪/时间线.md", "# 时间线\n"],
    ["长篇/测试长篇项目/追踪/角色状态.md", "# 角色状态\n"],
  ]);

  await Promise.all(
    [...files].map(([relativePath, content]) =>
      write(root, relativePath, content),
    ),
  );
}
