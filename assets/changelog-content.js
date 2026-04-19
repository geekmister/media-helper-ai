window.PRECOMPILED_CHANGELOG = [
  {
    "version": "v1.1.0",
    "date": "2026-04-20",
    "type": "feature",
    "sections": {
      "features": [
        "新增账号匹配度评估功能，基于用户输入的账号定位与问题相关性进行智能分析",
        "支持批量导入问题链接，一次分析多个问题的可答性",
        "新增内容赛道竞争分析，提供赛道饱和度和差异化建议",
        "支持导出评估报告为 PDF 格式，便于分享和存档"
      ],
      "optimizations": [
        "优化 AI 评估算法，提高评分准确性和一致性",
        "改进用户界面响应速度，减少页面加载时间",
        "优化移动端适配，提升在手机和平板上的使用体验"
      ],
      "fixes": [
        "修复了在某些浏览器中日期选择器显示异常的问题",
        "修复了评分计算逻辑中的边界情况处理"
      ],
      "knownIssues": [
        "批量导入功能在处理超过 10 个链接时可能会出现性能问题",
        "PDF 导出功能在某些特殊字符下可能会出现格式异常"
      ]
    },
    "translations": {
      "en": {
        "date": "2026-04-20",
        "sections": {
          "features": [
            "Added account matching assessment feature, providing intelligent analysis based on user input account positioning and question relevance",
            "Support batch import of question links for analyzing answerability of multiple questions at once",
            "Added content track competitive analysis, providing track saturation and differentiation suggestions",
            "Support exporting assessment reports as PDF format for easy sharing and archiving"
          ],
          "optimizations": [
            "Optimized AI assessment algorithm to improve scoring accuracy and consistency",
            "Improved user interface response speed, reducing page loading time",
            "Optimized mobile device adaptation, enhancing user experience on phones and tablets"
          ],
          "fixes": [
            "Fixed date picker display issues in some browsers",
            "Fixed boundary case handling in scoring calculation logic"
          ],
          "knownIssues": [
            "Batch import functionality may experience performance issues when processing more than 10 links",
            "PDF export functionality may have format abnormalities with certain special characters"
          ]
        }
      }
    }
  },
  {
    "version": "v1.0.0",
    "date": "2026-04-15",
    "type": "feature",
    "sections": {
      "features": [
        "初始版本发布，支持知乎问题可答性评估",
        "提供账号定位、问题链接、创建时间、关注人数、浏览量等输入项",
        "基于多维指标进行智能评分，包括情绪价值、流量潜力、竞争分析等",
        "生成详细的评估报告，包含分数、建议和问题信息",
        "支持中英文语言切换",
        "实现暗黑/亮色模式切换"
      ],
      "optimizations": [
        "优化用户界面设计，提升视觉体验",
        "提高评估算法的准确性和响应速度",
        "优化移动端适配"
      ],
      "fixes": [
        "修复了部分浏览器兼容性问题",
        "修复了表单验证逻辑"
      ],
      "knownIssues": []
    },
    "translations": {
      "en": {
        "date": "2026-04-15",
        "sections": {
          "features": [
            "Official stable version release, supporting Zhihu question answerability assessment",
            "Provide input items such as account positioning, question links, etc.",
            "Conduct intelligent scoring based on multi-dimensional indicators",
            "Generate detailed assessment reports",
            "Support Chinese and English language switching",
            "Implement dark/light mode switching"
          ],
          "optimizations": [
            "Optimized user interface design to enhance visual experience",
            "Improved assessment algorithm accuracy and response speed"
          ],
          "fixes": [
            "Fixed some browser compatibility issues",
            "Fixed form validation logic"
          ],
          "knownIssues": [
            "None"
          ]
        }
      }
    }
  },
  {
    "version": "v0.9.0",
    "date": "2026-04-10",
    "type": "feature",
    "sections": {
      "features": [
        "测试版发布，实现基本的问题评估功能",
        "支持基础的表单输入和评分系统",
        "实现初步的报告生成功能"
      ],
      "optimizations": [
        "优化界面布局和用户体验",
        "提高系统稳定性"
      ],
      "fixes": [],
      "knownIssues": []
    },
    "translations": {
      "en": {
        "date": "2026-04-10",
        "sections": {
          "features": [
            "Beta version release, implementing basic question assessment functionality",
            "Support basic form input and scoring system",
            "Implement preliminary report generation functionality"
          ],
          "optimizations": [
            "Optimize interface layout and user experience",
            "Improve system stability"
          ],
          "fixes": [
            "None"
          ],
          "knownIssues": [
            "None"
          ]
        }
      }
    }
  }
];